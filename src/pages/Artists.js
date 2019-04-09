function artistNames(artistsInfo){
    console.log(artistsInfo);
    var artistsListHtml = '<div>';
  
    artistsInfo.forEach((artistInfo) => {
        artistsListHtml += `<div class="wrapper"><h1>${artistInfo.name}</h1></div>`;
    });
  
    artistsListHtml += '</div>';
  
    console.log(artistsListHtml);
  
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
                <h1>Artist</h1>
                ${artistNames(state.artists)}
              </div>
            </div>
          </div>
    `;
}