import { getImages } from "./services/api";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector("#search-form");
const container = document.querySelector(".gallery")
const btn = document.querySelector(".load-more")

form.addEventListener("submit", onSubmit);
btn.addEventListener("click", onClick);

let page = 1;
let value = "";
 

function onSubmit(e) {
    e.preventDefault();
    page = 1;
    container.innerHTML = "";
    const { searchQuery } = e.currentTarget.elements;
    value = searchQuery.value;
    getImages(value, page).then((data) => { if (data.hits.length === 0) { Notify.failure("Sorry, there are no images matching your search query. Please try again.") } else { createMarkup(data); {Notify.success(`Hooray! We found ${data.totalHits} images.`)}} })
}
function createMarkup({hits}) {
    const markup=hits?.map (({webformatURL, tags, likes, views, comments, downloads  })=> `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" width="330" height="280"/>
  <div class="info">
    <p class="info-item">
      <b>Likes</b></br>${likes}
    </p>
    <p class="info-item">
      <b>Views</b></br>${views}
    </p>
    <p class="info-item">
      <b>Comments</b></br>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b></br>${downloads}
    </p>
  </div>
</div>`).join('')
    container.insertAdjacentHTML("beforeend", markup)
 btn.classList.remove("is-hidden")   
}

function onClick(e) {
    page += 1;
    getImages(value, page).then((data) => { console.log(data); if (data !== undefined) { createMarkup(data) } } )
}