'use strict';
function updateExchangeRates(update){
    const date = document.getElementById('date');
    const usdBuy = document.getElementById('usd-buy-rate');
    const usdSell = document.getElementById('usd-sell-rate');
    const eurBuy = document.getElementById('eur-buy-rate');
    const eurSell = document.getElementById('eur-sell-rate');
    date.textContent = update.date;
    usdBuy.textContent = update.usd.buyRate;
    usdSell.textContent = update.usd.sellRate;
    eurBuy.textContent = update.eur.buyRate;
    eurSell.textContent = update.eur.sellRate;
}
const update = {
    date: '20 июля',
    usd: {
        buyRate: '73,75',
        sellRate: '75,24',
    },
    eur: {
        buyRate: '86,70',
        sellRate: '88,74',
    }
};
updateExchangeRates(update);