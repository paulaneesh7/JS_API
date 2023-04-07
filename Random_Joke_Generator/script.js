"use script";

const jokeContainer = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = function () {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.textContent = `${data.joke}`;
      jokeContainer.classList.add("fade");
    });
};

btn.addEventListener("click", getJoke);

getJoke();
