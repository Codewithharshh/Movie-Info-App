let search = document.querySelector('.search_input');   
let container = document.querySelector('.container');
let search_btn = document.querySelector('.search-btn');
let result = document.querySelector('.result');
let message = document.querySelector('.message');

let key = " "; //Under This quote write your api key
               //If You don't know how to get api key then go to my Instagram page I give my Instagram page link in readme.md.Then open movie info project post on that post I explain how to get your api key
               //Do not share your api key with anyone

let getMovie = () => {
        let movieName = search.value;
        let url = `https:www.omdbapi.com/?t=${movieName}&apikey=${key}`;

if(movieName != ''){
        fetch(url).then((resp) => resp.json()).then((data) => {
  if(data.Response == 'True'){             
        result.innerHTML =  `
    <h2 class="title">${data.Title}</h2>
        <div class="poster">
       <img src="${data.Poster}">         
        </div>
     
     <div class="details">
         <span> ${data.Year} </span>
         <span>|</span>
         <span>${data.Rated} </span>
         <span>|</span>
         <span>${data.Runtime} </span>
     </div> 
     
       <div class="rating">
               <i class="fa-solid fa-star"></i>
               <h2>${data.imdbRating}</h2>
       </div>

    <div class="Genre">
    <div>${data.Genre.split(",").join("</div><div>")}</div>     
    </div>
    <div class="plot">
      <h2>Plot</h2>  
      <span>${data.Plot}</span>
    </div>
    <div class="cast">
      <h2>Cast</h2>
      <span>${data.Actors}</span>
    </div>
        `
  }else{
    result.innerHTML = `<h3 class="message">${data.Error}</h3>`;
  }       
 }).catch(() => {
  result.innerHTML = `<h3 class="message">Error Occured!</h3>`;
            });
}
};

search_btn.addEventListener('click',getMovie);
window.addEventListener('load',getMovie);
