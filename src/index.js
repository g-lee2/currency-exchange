import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';

function displayApiData(codeCountry1, codeCountry2, exchangeAmount) {
  let exchangeRateResult = Exchange.getExchangeRate(codeCountry1, codeCountry2, exchangeAmount);
  //let conversionRate = exchangeRateResult.conversion_rate;
  console.log(exchangeRateResult);
  //let conversionResult = exchangeRateResult.conversion_result;
  //document.getElementById("rate-conversion").innerHTML = conversionRate;
  //document.getElementById("rate").innerHTML = conversionResult;
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
  displayApiData(country1, country2, currencyAmount);
}


window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", displayData);
});
