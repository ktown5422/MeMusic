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
const YOUR_API_KEY = 'cea06967a0f646a89a315d7a628e60b1';

function render(state){
    root.innerHTML = `
                ${Navigation(state)}
                ${Header(state)}
                ${Content(state)}
                ${Footer(state)}
                `;

    router.updatePageLinks();
}

axios
    .get('https://developer.spotify.com/documentation/web-api/', {
        'headers': {
            'Authorization': `token ${$YOUR_API_KEY}`
        }
    })
    .then((response) => store.dispatch((state) => assign(state, { 'repos': response.data })));


function navHandler(params){
    var destination = startCase(params.page);
   
    render(State[destination]);
}

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Dashboard' }))
    .resolve();