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
    const apiUrl = ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
    fetch ( apiUrl )
    .then(res=>res.json())
    .then(resJson=> {
        const coins = resJson[0].image
        console.log(coins)
        showCoin(coins)
    })
    .catch(error=>error)
}

obtainCoins()

function showCoin(coins) {
    const app = null || document.getElementById('app');
    app.innerHTML=`
    <img src="${coins}">
    `
}