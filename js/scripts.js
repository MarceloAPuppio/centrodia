import slider from "./slider.js";

let arregloFotos = [
  "url('images/carrousel/1.webp')",
  "url('images/carrousel/2.webp')",
  "url('images/carrousel/3.webp')",
  "url('images/carrousel/4.webp')",
];
const galery = document.querySelector(".galery");
let clousure = slider(5000, galery, arregloFotos);
clousure();
