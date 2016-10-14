'use strict'

function BankierTestPO() {
    this.bankierUrl = 'http://www.bankier.pl/';
    this.marketBaseFrame = '#mainNav > ul > li.menuItem';
    this.marketText = 'Rynki';
    this.marketCurrency = '#mainNav > ul > li.menuItem > div > ul > li';
    this.currencyText = 'Waluty';
    this.tableKursyNbpId = '#boxKursyNbpTab1';
    this.allCurrencyForex = '#boxExchangeHotNews > div.boxHeader > ul > li';
    this.allCurrencyForexText = 'wszystkie';
    this.headerAllCurrency = '#pageMainContainerLeft645 > h1';
    this.arrowOnKursyNBPinUsdRow = '#boxKursyNbpTab1 > table > tbody > tr.change.up > td.name.textNowrap > span.arrow';
    this.changeValueOnKursyNBPinUsdRow = '#boxKursyNbpTab1 > table > tbody > tr.change.up > td:nth-child(3) > span';
    this.kursForexSortArrows = '[aria-label="Kurs: No sort applied, activate to apply an ascending sort"]';
    this.currencyEuTab = '[class="box205 left EURPLN "]';
    this.arrowHead = '[class="arrow"]';
    this.changeValue = '[class="changeValue adjustFontSize"]';
    this.boxCurrencyForexId = '#boxCurrency';


    //var boxTableKursyRynkowe, tableKursyRynkoweForex,tableRows, rowsValues = [];
    this.boxTableKursyRynkowe = element(by.css(this.boxCurrencyForexId));
    this.tableKursyRynkoweForex = this.boxTableKursyRynkowe.element(by.css('tbody'));
    this.tableRows = this.tableKursyRynkoweForex.all(by.tagName('tr'));

}

BankierTestPO.prototype.openMainSite = function () {
    browser.get(this.bankierUrl);
}

BankierTestPO.prototype.validateUrl = function () {
    expect(browser.getCurrentUrl()).toEqual(this.bankierUrl);
}

BankierTestPO.prototype.clickCurrency = function () {
    browser.actions().mouseMove(element(by.cssContainingText(this.marketBaseFrame, this.marketText))).perform();
    element(by.cssContainingText(this.marketCurrency, this.currencyText)).click();
}

BankierTestPO.prototype.validateColorOfCurrencyChanges = function () {
    browser.sleep(5000);
    var changeValueContainer, changeValueArrow, changeValue, changeValueText;

    changeValueContainer = element(by.css(this.currencyEuTab));
    changeValueArrow = changeValueContainer.element(by.css(this.arrowHead));
    changeValue = changeValueContainer.element(by.css(this.changeValue));
    var arrowColor = changeValueArrow.getCssValue('color');

        changeValueText = changeValue.getAttribute('value');
    if (changeValueText[0] === '-') {
        expect(arrowColor).toBe('rgba(255, 0, 0, 1)');
} else {
    expect(arrowColor).toBe('rgba(27, 154, 60, 1)');
}

}

BankierTestPO.prototype.validateFormatOfChanges = function () {
    var changeValueContainer, changeValue, changeValueText, changeValueSubstring;
    changeValueContainer = element(by.css(this.currencyEuTab));
    changeValue = changeValueContainer.element(by.css(this.changeValue));
    changeValueText = changeValue.getText();
    changeValueSubstring = changeValueText.substr(changeValueText.indexOf('('), changeValueText.indexOf(')'));
    //return changeValueSubstring;
    return changeValueSubstring.match(new Regex('^[0-9]*\,[0-9]*$'));
}


BankierTestPO.prototype.validateCurrencyNameContent = function () {
     browser.sleep(5000);
    var tableKursNBP = element(by.css(this.tableKursyNbpId)),
        tableRows,
        rowsNames = [];
        tableRows = tableKursNBP.all(by.tagName('a'));
         tableRows.map(function (element) {
             element.getText().then(function(res){
                rowsNames.push(res);
            })
                return rowsNames;
        });
}

BankierTestPO.prototype.clickAllCurrencyForex = function () {
    element(by.cssContainingText(this.allCurrencyForex ,this.allCurrencyForexText )).click();
}

BankierTestPO.prototype.validateHeader = function () {
    var header = element(by.css(this.headerAllCurrency));
    return header;
    // expect(header.getText()).toBe(this.headerExpectedText);
}

BankierTestPO.prototype.validateArrowBesideUSD = function () {
    browser.sleep(5000);
    var changeValueArrow, changeValue, changeValueText, arrowColor;

    changeValueArrow = element(by.css(this.arrowOnKursyNBPinUsdRow));
    changeValue = element(by.css(this.changeValueOnKursyNBPinUsdRow));

    arrowColor = changeValueArrow.getCssValue('color');
    changeValueText = changeValue.getText();
    if (changeValueText[0] === '-') {
        expect(arrowColor).toBe('rgba(255, 0, 0, 1)');
    } else {
        expect(arrowColor).toBe('rgba(27, 154, 60, 1)');
    }
}

BankierTestPO.prototype.sortByKursAscending = function () {
    element(by.css(this.kursForexSortArrows)).click();
}


BankierTestPO.prototype.validateIfKursIsProperlySorted = function () {
var rowsValues = [];

    this.tableRows.each(function (element,index) {
           if(index !== 10) {
               return element.element(by.css('.colKurs')).getText().then(function (a) {
                   rowsValues.push(a);
               });
           }
           }).then(function () {
        return rowsValues;
    });
    return rowsValues;
}


BankierTestPO.prototype.getDateToValidate = function () {
    var rowsValues = [];

        this.tableRows.each(function (element,index) {
        if(index !== 10) {
            return element.all(by.css('td')).last().getText().then(function (a) {
                rowsValues.push(a);
            });
        }
    }).then(function () {
        return rowsValues;
    });

 return rowsValues;
}


module.exports = BankierTestPO;
