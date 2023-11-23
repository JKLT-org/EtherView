// this can be used/accessed when clicking the reload button to grab the current price of the cryptocurrency you want

import fetch from 'node-fetch';

// fetches the current price of BTC converted to USD
export default fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
  headers: {
    'X-CoinAPI-Key': 'F5BDDC6B-2406-4D02-BE8C-ED4485049ADF', // Replace with your API key
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
