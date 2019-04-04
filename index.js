import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import * as State from './state';
import { startCase } from 'lodash';
import Navigo from 'navigo';
import axios from 'axios';


var router = new Navigo(location.origin);
var root = document.querySelector('#root');


function render(state){
    root.innerHTML = `
                ${Navigation(state)}
                ${Header(state)}
                ${Content(state)}
                ${Footer(state)}
                `;

    router.updatePageLinks();

    const button = document.querySelector('button');
    

    button.addEventListener('click', () => {
        var searchValue = document.querySelector('#site-search').value;

        axios
            .post('https://memusic.herokuapp.com/login')
            .then((response) => {
                axios
                    .get(`https://api.spotify.com/v1/search?q=${searchValue}&type=artist `, {
                        'headers': {
                            'Authorization': `Bearer ${response.data}`
                        }
                    })
                    .then((response) => console.log('search', response));
            });
    });
}


axios
    .post('https://memusic.herokuapp.com/login')
    .then((response) => {
        axios
            .get('https://api.spotify.com/v1/browse/categories/party/playlists', {
                'headers': {
                    'Authorization': `Bearer ${response.data}`
                }
            })
            .then((response) => console.log('playlist', response.data));
    });

// .then((response) => store.dispatch((state) => Object.assign(state, { 'playlists': response.data.playlists.items })));

function navHandler(params){
    var destination = startCase(params.page);
   
    render(State[destination]);
}

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Dashboard' }))
    .resolve();