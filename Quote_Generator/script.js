"use script";
let randomQuote = document.querySelector(".randomQuote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

let getQuote = async function () {
  try {
    const quote = await fetch("https://api.quotable.io/random");
    const data = await quote.json();

    randomQuote.innerText = data.content;
    author.innerText = data.author;

  } catch (err) {
    randomQuote.innerText = 'Sorry!! there has been some error';
  }
};

btn.addEventListener("click", getQuote);