//import { create } from "domain";

//import { ENGINE_METHOD_ALL } from "constants";

let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function (event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function shortenPageTitle() {
    let newTitle = document.getElementById("main-title").innerHTML = "Welcome to My Homepage";
    console.log(newTitle);
  }
  shortenPageTitle();


  // Part 2
  function changeBodyBgColor() {
    let newBackground = document.body.style.backgroundColor = "yellow";
    console.log(newBackground);
  }
  changeBodyBgColor();


  // Part 3
  function removeLastFavoriteThing() {
    let parent = document.getElementById("favorite-things");
    let child = parent.lastElementChild;
    parent.removeChild(child);
  }
  removeLastFavoriteThing();

  // Part 4
  function makeSpecialTitlesBigger() {
    let allST = document.querySelectorAll('.special-title');

    allST.forEach(item => {
      item.style.fontSize = 2;
    })
  }
  makeSpecialTitlesBigger();



  // Part 5
  function RemoveChicagoRace() {
    let parent2 = document.getElementById("past-races");
    let childChicago = parent2.getElementsByTagName("li")[3]; parent2.removeChild(childChicago);
  }
  RemoveChicagoRace();

  // Part 6
  function addPastRace() {
    let createChild = document.createElement("LI");
    let city = document.createTextNode("Miami");
    createChild.appendChild(city);
    document.getElementById("past-races").appendChild(createChild);
  }
  addPastRace();


  // Part 7
  function createNewBlogPost() {
    let findClass = document.querySelector(".main")
    let newPost = document.createElement("div");
    newPost.classList.add("blog-post", "purple");
    newPost.innerHTML = `
<h1>Miami</h1>
<p>placeholder for content</p>
`
      ;
    findClass.appendChild(newPost);
  }
  createNewBlogPost();

});
