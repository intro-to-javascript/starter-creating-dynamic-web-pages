/** 
  VARIABLES
*/
const dogImages = [
  "https://images.dog.ceo/breeds/springer-english/n02102040_8463.jpg",
  "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1234.jpg",
  "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_5234.jpg",
  "https://images.dog.ceo/breeds/spaniel-irish/n02102973_3635.jpg",
  "https://images.dog.ceo/breeds/germanshepherd/n02106662_16817.jpg",
  "https://images.dog.ceo/breeds/pointer-german/n02100236_5956.jpg",
];

const catImageSrc = "https://cataas.com/cat";

/**
  SELECTORS
  
  `document.querySelector()`/`document.querySelectorAll()` are the recommended modern approaches, which is convenient because it allows you to select elements using CSS selectors. There are older methods for grabbing element references, such as `document.getElementById()` and `document.getElementsByTagName()`, but are not as convenient
*/

const html = document.querySelector("html");
const body = document.querySelector("body");
const primaryHeading = document.querySelector(".primary-heading");

const animalImage = document.querySelector(".animal-image");
const commentsList = document.querySelector(".comments");

const addCommentButton = document.querySelector(".add-comment-button");
const changeThemeButton = document.querySelector(".change-theme-button");
const toggleThemeButton = document.querySelector(".toggle-theme-button");

/**
  EVENT HANDLERS
*/

function handleAnimalImageClick() {
  let dogImageSrc = dogImages[Math.floor(Math.random() * dogImages.length)];

  animalImage.setAttribute(
    "src",
    animalImage.getAttribute("src") === catImageSrc ? dogImageSrc : catImageSrc
  );
}

function handleAddCommentButtonClick() {
  const comment = prompt("Say something about this picture!");

  const commentListItem = document.createElement("li");
  commentListItem.textContent = comment;
  commentsList.appendChild(commentListItem);
}

function handleChangeThemeButtonClick() {
  // The JavaScript property versions of the CSS styles are written in lower camel case whereas the CSS versions are hyphenated (e.g. backgroundColor versus background-color).
  html.style.backgroundColor = "#3A3B3C";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  body.style.borderColor = "grey";
  primaryHeading.style.color = "white";
}

// function handleToggleThemeButtonClick() {
//   if (theme === "light") {
//     theme = "dark";
//     html.style.backgroundColor = "#3A3B3C";
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     body.style.borderColor = "grey";
//     primaryHeading.style.color = "white";
//   } else {
//     theme = "light";
//     html.style.backgroundColor = "#00539f";
//     body.style.backgroundColor = "#ff9500";
//     body.style.color = "#000";
//     body.style.borderColor = "#000";
//     primaryHeading.style.color = "#00539f";
//   }
// }

// Here is another way to dynamically manipulate styles in your document using classes, which results in cleaner code since there's no mixing of CSS with JS
function handleToggleThemeButtonClick() {
  // html.classList.toggle("html-dark");
  // body.classList.toggle("body-dark");
  // primaryHeading.classList.toggle("primary-heading-dark");
  [
    { element: html, class: "html-dark" },
    { element: body, class: "body-dark" },
    { element: primaryHeading, class: "primary-heading-dark" },
  ].forEach((tag) => tag.element.classList.toggle(tag.class));
}

/**
  REGISTER EVENT HANDLERS
*/
animalImage.addEventListener("click", handleAnimalImageClick);
addCommentButton.addEventListener("click", handleAddCommentButtonClick);
changeThemeButton.addEventListener("click", handleChangeThemeButtonClick);
toggleThemeButton.addEventListener("click", handleToggleThemeButtonClick);
