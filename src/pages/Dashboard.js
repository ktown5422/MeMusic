function Category(category){
    return `
      <div>
        <h4>${category.name}</h4>
        <img src="${category.icons[0].url}">
      </div>
    `;
}


function Categories(categories){
    return categories
        .slice(0, 8)
        .map(Category)
        .join('');
}

function Playlist(playlist){
    return `
    <div>
      <h4>${playlist.name}</h4>
      <img src="${playlist.images[0].url}">
    </div>
  `;
}


function Playlists(playlists){
    return playlists
        .slice(0, 8)
        .map(Playlist)
        .join('');
}

function Worldpartys(worldpartys){
    return `
    <div>
      <h4>${worldpartys.name}</h4>
      <img src="${worldpartys.images[0].url}">
    </div>
  `;
}


function Worldparty(worldparty){
    return worldparty
        .slice(0, 8)
        .map(Worldpartys)
        .join('');
}

export default function Dashboard(state){
    return ` 
          <div id="content">
            <div class="container">
              <div class="search-box">
                <form="site-search">
                <input type="search" id="site-search" placeholder="Search Artist">
                <button id="search-b">Search</button>
                </form>
              </div>
              <div>
                <h1>World Party Releases</h1>
                <div class="wrapper">
                ${Playlists(state.playlists)}
                </div>
              </div>
              <div>
                <h1>Playlist</h1>
                <div class="wrapper">
                  ${Playlists(state.playlists)}
                </div>
              </div>
              <div>
                <h1>Collections</h1>
                <div class="wrapper">
                  ${Categories(state.categories)}
                </div>
              </div>
            </div>
          </div>
    `;
}