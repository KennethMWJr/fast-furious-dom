let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
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

  }


  // Part 3
  function removeLastFavoriteThing() {

  }


  // Part 4
  function makeSpecialTitlesBigger() {

  }


  // Part 5
  function RemoveChicagoRace() {

  }

  // Part 6
  function addPastRace() {

  }


  // Part 7
  function createNewBlogPost() {

  }

});
