export default function slider(slideTime, htmlElement, arr) {
  let index = 0;
  const renderBackground = () => {
    htmlElement.style.backgroundImage = arr[index];
  };
  function changePicture() {
    renderBackground();
    index < arr.length - 1 ? index++ : (index = 0);
    setTimeout(changePicture, slideTime);
  }
  function nextPicture() {
    index < arr.length - 1 ? index++ : (index = 0);
    renderBackground();
  }
  function backPicture() {
    index > 0 ? index-- : (index = arr.length - 1);
    renderBackground();
  }
  return {
    changePicture,
    nextPicture,
    backPicture,
  };
}
