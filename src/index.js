import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';

function getApiData(codeCountry1, codeCountry2, exchangeAmount) {
  Exchange.getExchangeRate(codeCountry1, codeCountry2, exchangeAmount)
    .then(function(response) {
      if (response.main) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}

function printElements(data) {
  document.getElementById('rate-conversion').innerHTML = data.conversion_rate.toFixed(2);
  document.getElementById('rate').innerHTML = data.conversion_result.toFixed(2);
}

function printError(error) {
  document.getElementById('result').setAttribute('class', 'hidden');
  if (error.toString().includes('TypeError')) {
    document.getElementById('error').innerHTML = `${error}! The currency you selected is not supported! Please make sure to make two different selections from the drop down menu!`;
  } else {
    document.getElementById('error').innerHTML = `${error}! There was a problem!`;
  }
}
  

function displayData(event) {
  event.preventDefault();
  document.getElementById('result').removeAttribute('class');
  let country1 = document.querySelector("#firstCountry").value;
  let country2 = document.querySelector("#secondCountry").value;
  let currencyAmount = parseInt(document.getElementById("amount-input").value);
  document.getElementById("code1").innerHTML = country1;
  document.getElementById("code2").innerHTML = country2;
  document.getElementById("code1Again").innerHTML = country1;
  document.getElementById("code2Again").innerHTML = country2;
  document.getElementById("input-amount").innerHTML = currencyAmount;
  getApiData(country1, country2, currencyAmount);
}


window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", displayData);
});
