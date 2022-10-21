export default class Exchange {  
  static getExchangeRate(currencyCode1, currencyCode2, amount) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest(); 
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyCode1}/${currencyCode2}/${amount}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText)
        if (this.status === 200) {
          resolve(response);
        } else {
          reject([this, response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}
  
