export default function Dashboard(){
    return ` 
          <div id="content">
            <div class="container">
              <div>
                <label for="site-search">Search MeMusic:</label>
                <input type="search" id="site-search" name="q"
                      aria-label="Search through site content">
                
                <button>Search</button>
              </div>
              <div>
                <h1> New Releases</h1>
              </div>
              <div>
                <h1>Playlist</h1>
              </div>
              <div>
                <h1>Genres</h1>
              </div>
            </div>
          </div>
    `;
}