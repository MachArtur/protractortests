'use strict'
var configData = {
    bankierUrl : 'http://www.bankier.pl/',
    dataPatternRegex : /[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2}/,
    currencyOrder : ['EUR', 'USD', 'CHF', 'GBP', 'JPY'],
    marketBaseFrame : '#mainNav > ul > li.menuItem',
    marketText : 'Rynki',
    marketCurrency : '#mainNav > ul > li.menuItem > div > ul > li'
}


function setup() {

}

setup.prototype.getConfigData = function () {
    return configData;
}

module.exports = setup;
