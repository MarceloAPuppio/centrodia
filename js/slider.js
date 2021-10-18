export default function slider(slideTime, htmlElement, arr) {
  let index = 0;
  return function changePicture() {
    htmlElement.style.backgroundImage = arr[index];

    index < arr.length - 1 ? index++ : (index = 0);
    setTimeout(changePicture, slideTime);
  };
}
