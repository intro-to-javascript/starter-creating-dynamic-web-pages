/**
  EXERCISE: ADDING EVENT LISTENERS
  In this exercise, implement code so that clicking any of the buttons will set the background of the container to the color contained in the button's data-color attribute. 

  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
*/

const container = document.querySelector(".container");

function handleButtonClick(event) {
  container.style.backgroundColor = event.target.dataset.color;
}

container.addEventListener("click", handleButtonClick);
