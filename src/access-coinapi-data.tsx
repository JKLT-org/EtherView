// type node access-coinapi.data.js in terminal to run the fetch requests

// ----- CoinAPI -----

// this can be used/accessed when clicking the reload button to grab the current price of the cryptocurrency you want

import fetch from 'node-fetch';

// fetches the current price of BTC converted to USD, can be used as a template for other currencies
fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
  headers: {
    'X-CoinAPI-Key': 'F5BDDC6B-2406-4D02-BE8C-ED4485049ADF', // Replace with your API key
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));

// ----- Etherscan API -----

const apiKey = '49CW694CARZC8PKEVDBWGCBR19WPWUJ5GP';

const url = `https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=${apiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data : any) => {
    if (data.status === '1') {
      const balanceInWei = data.result;
      const balanceInEth = balanceInWei / 1e18; // Convert Wei to ETH
      console.log(
        `Balance for address 0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae: ${balanceInEth} ETH`
      );
    } else {
      console.error('Error fetching balance:', data.message);
    }
  })
  .catch((error) => {
    console.error('Error with fetch operation:', error);
  });
