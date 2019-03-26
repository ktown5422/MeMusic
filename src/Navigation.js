import { lowerCase } from 'lodash';

function linkBuilder(links){
    // var linksHTML = '';
    
    var linksHTML = links.map((link) => {
        var destination = '';

        if(link !== 'Dashboard'){
            destination = lowerCase(link);
        }

      
        return `<li> 
            <a data-navigo href="./${destination}">
            ${link}
            </a>
          </li>
        `;
    }).join('');

    return linksHTML;
}

export default function Navigation(state){
    return `

    <div id="navigation">
      <ul class="container">
        ${linkBuilder(state.links)}
      </ul>
    </div>

    `;
}