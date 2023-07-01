/*
const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

const app = null || document.getElementById('app');

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;  
}


(async () => {
    try {
        const coins = await fetchData(API);
        console.log(coins);
        
    } catch (error) {
        console.log(error)
    }
})
*/


//Call to the Api and sampling on screen with the asynchronous method "then".


function obtainCoins() {
    const apiUrl = ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    fetch ( apiUrl )
    .then(res=>res.json())
    .then(resJson=> {
        const coins = resJson;
        console.log(coins)
        showCoin(coins)
    })
    .catch(error=>error)
}

obtainCoins()

function showCoin(coins) {
    const resultDataElement = document.getElementById('Table-content-coins-all');
  
    let resultHTML = '';
  
    for (let i = 0; i < coins.length; i++) {
      const currentPrice = coins[i].current_price;
      const priceChange = coins[i].price_change_percentage_24h;
      const totalSupply = coins[i].total_supply;
      const symbol = coins[i].symbol.toUpperCase();
  
      // Verificar si los valores son positivos o negativos y aplicar los estilos correspondientes
      const currentPriceColor = currentPrice < 0 ? 'red' : '#00EBA6';
      const priceChangeColor = priceChange < 0 ? 'red' : '#00EBA6';
      const totalSupplyColor = totalSupply < 0 ? 'red' : '#00EBA6';
  
      resultHTML += `
        <div class="order">
          <div class="Table-content-coins-left">
            <p>1</p>
            <img src="${coins[i].image}" alt="">
            <p>${coins[i].name}</p>
            <span>${symbol}</span>
          </div>
          <div class="Table-content-coins-right">
            <p class="price" style="color: ${currentPriceColor}">${currentPrice}</p>
            <p class="price_change" style="color: ${priceChangeColor}">${priceChange}</p>
            <p class="supply" style="color: ${totalSupplyColor}">${totalSupply}</p>
          </div>
        </div>
        <div class="border"></div>
      `;  
    }
  
    resultDataElement.innerHTML = resultHTML;
  }


/*
<p>${coins[i].name}*/