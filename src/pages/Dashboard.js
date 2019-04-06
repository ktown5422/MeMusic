function Categories(categories){
    return categories
        .slice(0, 8)
        .map((category) => `<div><img src="${category.icons[0].url}"></div>`)
        .join('');
}


export default function Dashboard(state){
    console.log(state.categories);
   
    return ` 
          <div id="content">
            <div class="container">
              <div class="search-box">
                <label for="site-search">MeMusic:</label>
                <input type="search" id="site-search" name="q"
                      aria-label="Search through site content">
                
                <button id="search-b">Search</button>
              </div>
              <div>
                <h1>New Releases</h1>
                <div class="wrapper">
                  <div>One</div>
                  <div>Two</div>
                  <div>Three</div>
                  <div>Four</div>
                  <div>Five</div>
                  <div>Six</div>
                  <div>Seven</div>
                  <div>Eight</div>
                </div>
              </div>
              <div>
                <h1>Playlist</h1>
                <div class="wrapper">
                  <div>One</div>
                  <div>Two</div>
                  <div>Three</div>
                  <div>Four</div>
                  <div>Five</div>
                  <div>Six</div>
                  <div>Seven</div>
                  <div>Eight</div>
                </div>
              </div>
              <div>
                <h1>Genres</h1>
                <div class="wrapper">
                  ${Categories(state.categories)}
                </div>
              </div>
            </div>
          </div>
    `;
}