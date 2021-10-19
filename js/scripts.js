import slider from "./slider.js";

let arregloFotos = [
  "url('images/carrousel/1.webp')",
  "url('images/carrousel/2.webp')",
  "url('images/carrousel/3.webp')",
  "url('images/carrousel/4.webp')",
];
const GALERY = document.querySelector(".galery");
const BACK = document.querySelector(".back");
const NEXT = document.querySelector(".next");

let { changePicture, nextPicture, backPicture } = slider(
  8000,
  GALERY,
  arregloFotos
);
NEXT.addEventListener("click", nextPicture);
BACK.addEventListener("click", backPicture);

changePicture();
