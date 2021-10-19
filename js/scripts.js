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

// Trabajar sobre esto
// window.addEventListener("scroll", function () {
//   if (
//     window.scrollY > window.innerHeight ||
//     window.scrollY > document.documentElement.clientHeight ||
//     window.scrollY > document.body.clientHeight
//   ) {
//     document.querySelector(".header").classList.add("headerActive");
//   } else {
//     //remove the background property so it comes transparent again (defined in your css)
//     document.querySelector(".header").classList.remove("headerActive");
//   }
// });
