import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  let item = `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
       <img 
       class="gallery__image" 
       src="${galleryItem.preview}" 
       alt="${galleryItem.description}" />
    </a>
 </li>`;

  gallery.innerHTML += item;
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
