function artistNames(artistsInfo){
    var artistsListHtml = '<div class="wrapper">';
  
    artistsInfo.forEach((artistInfo) => {
        artistsListHtml += `<h1>${artistInfo.name}</h1>`;
    });
  
    artistsListHtml += '</div>';
    
  
    return artistsListHtml;
}
  
export default function Artists(state){
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
                <a href="https://memusic.netlify.com/"><h1>Home</h1></a>
                <h1>Artist</h1>
                ${artistNames(state.artists)}
              </div>
            </div>
          </div>
    `;
}