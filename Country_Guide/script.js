"use script";

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", function () {
  let countryName = countryInp.value;
  let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  //   console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const [countryData] = data;
      //   console.log(countryData);
      //   console.log(countryData.capital[0]);
      //   console.log(countryData.flags.svg);
      //   console.log(countryData.name.common);
      //   console.log(countryData.continents[0]);
      //   console.log(Object.keys(countryData.currencies)[0]);
      //   console.log(
      //     Object.values(countryData.languages).toString().split(",").join(",")
      //   );
      result.innerHTML = `
        <img src="${countryData.flags.svg}"
        class="flag-img">
        <h2>${countryData.name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital: </h4>
                <span>${countryData.capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent: </h4>
                <span>${countryData.continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population: </h4>
                <span>${countryData.population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency: </h4>
                <span>${Object.keys(countryData.currencies)[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages: </h4>
                <span>${Object.values(countryData.languages)
                  .toString()
                  .split(",")
                  .join(",")}</span>
            </div>
        </div>
      `;
    })
    .catch((error) => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3> The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3> Please enter a valid country name, </h3>`;
      }
    });
});
