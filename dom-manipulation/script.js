/**
 *  The DOM
 *
 *  Browsers read your HTML and create an object in the computer’s memory
 *  for each part. That HTML layout is called a “data model” because it
 *  describes the structure of your webpage. The Document Object Model (DOM)
 *  is the browser’s JavaScript representation of your HTML elements.
 */

// Do this: Open Dev Tools and type in the word “document” to see what’s returned.

/**
 * GETTERS
 * =================
 * You can use JS to get objects from the DOM and perform actions on the objects
 * using special methods called "getters". Vanilla JS gives you various options to interact with the DOM. For a complete list of DOM API methods, see https://www.w3schools.com/Jsref/dom_obj_document.asp
 */

// Do this: In the Dev Tools console, let's try using getters to retrieve objects from the DOM

console.log(document.getElementById("title")); // returns entire DOM node and whatever is included inside

console.log(document.getElementsByClassName("list")); // returns an array of all dom nodes with that class

// querySelector() is an alternative to getElementById() and getElementsByClassName()
// You can also use it to target element by id, need hash before id name
console.log(document.querySelector("#title"));

// You can use it to target element by class name, need dot before class name
console.log(document.querySelector(".list"));

// querySelectorAll() returns all instances of an element with a certain class name or tag.
console.log(document.querySelectorAll("a")); // return an array of all anchor tags in a document

/**
 * SETTERS
 * =================
 * Setters are methods that change something on the webpage
 */

// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
// document.getElementById("nickname").textContent = "Hou Chia";
document.querySelector("#nickname").textContent = "Hou Chia";

// document.getElementById("favorites").textContent = "science, music, my candy subjects";
document.querySelector("#favorites").textContent =
  "computer science, Netflix, travel";

document.querySelector("#hometown").textContent = "Seria";

// Iterate through each li and change the class to "list-item".
const items = document.querySelectorAll("li");
for (let i = 0; i < items.length; i++) {
  items[i].classList.add("list-item");
}

/**
 * ATTRIBUTE CHANGING
 */
// Create a new img element and set its src attribute to a random picture from https://cataas.com/cat. Append that element to the page.
const myPic = document.createElement("img");
myPic.setAttribute("src", "https://cataas.com/cat");
document.body.appendChild(myPic);

// myPic.removeAttribute("src");
