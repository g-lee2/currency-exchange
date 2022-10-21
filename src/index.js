import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';

function getApiData(codeCountry1, codeCountry2, exchangeAmount) {
  let promise = Exchange.getExchangeRate(codeCountry1, codeCountry2, exchangeAmount);
  promise.then(function(array) {
    printElements(array);
  }, function(errorArray) {
    printError(errorArray);
  });
}

function printElements(data) {
  document.getElementById('rate-conversion').innerHTML = data.conversion_rate.toFixed(2);
  document.getElementById('rate').innerHTML = data.conversion_result.toFixed(2);
}

function printError(error) {
  document.getElementById('error-message').innerHTML = `${error}.`;
}

function displayData(event) {
  event.preventDefault();
  let country1 = document.querySelector("#firstCountry").value;
  console.log(country1);
  let country2 = document.querySelector("#secondCountry").value;
  console.log(country2);
  let currencyAmount = parseInt(document.getElementById("amount-input").value);
  console.log(currencyAmount);
  document.getElementById("code1").innerHTML = country1;
  document.getElementById("code2").innerHTML = country2;
  document.getElementById("input-amount").innerHTML = currencyAmount;
  getApiData(country1, country2, currencyAmount);
}


window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", displayData);
});
