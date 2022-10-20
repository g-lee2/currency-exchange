import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';

function handleForm(event) {
  event.preventDefault();
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
});
