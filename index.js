import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import * as BaseState from './state';
import { startCase } from 'lodash';
import Navigo from 'navigo';
import axios from 'axios';


var router = new Navigo(location.origin);
var root = document.querySelector('#root');
var State = Object.assign({}, BaseState);


function render(state){
    root.innerHTML = `
                ${Navigation(state[state.active])}
                ${Header(state[state.active])}
                ${Content(state)}
                ${Footer(state[state.active])}
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
                    .then((response) => console.log('search', response)); // i need to get search to render on the page when i click search Line 41
            });
    });
}


axios
    .post('https://memusic.herokuapp.com/login')
    .then((response) => {
        axios
            .get('https://api.spotify.com/v1/browse/categories', {
                'headers': {
                    'Authorization': `Bearer ${response.data}`
                }
            })
            .then((response) => {
                State.categories = response.data.categories.items;
                render(State);
            });
    });

// .then((response) => store.dispatch((state) => Object.assign(state, { 'playlists': response.data.playlists.items })));

axios
    .post('https://memusic.herokuapp.com/login')
    .then((response) => {
        axios
            .get('https://api.spotify.com/v1/browse/featured-playlists', {
                'headers': {
                    'Authorization': `Bearer ${response.data}`
                }
            })
            .then((response) => {
                State.playlists = response.data.playlists.items;
                render(State);
            });
    });

axios
    .post('https://memusic.herokuapp.com/login')
    .then((response) => {
        axios
            .get('https://api.spotify.com/v1/browse/categories/party/playlists', {
                'headers': {
                    'Authorization': `Bearer ${response.data}`
                }
            })
            .then((response) => {
                State.worldparty = response.data.playlists.items; // i need to fix this error on Line 89. in the Console i get t.data.worldparty is undefined 92:16
                render(State);
            });
    });

function navHandler(params){
    var destination = startCase(params.page);

    State.active = destination;
   
    render(State);
}

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Dashboard' }))
    .resolve();