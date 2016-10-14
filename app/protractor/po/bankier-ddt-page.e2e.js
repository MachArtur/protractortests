'user strict'

var SetupData = require('../setupData/setup.js');

function BankierDdt() {
   // this.setup = new SetupData();
    //this.setupData = this.setup.getConfigData();
    //this.rynkiInNavBarElement = element(by.cssContainingText(this.setupData.marketBaseFrame, this.setupData.marketText));
    this.marketBaseFrame = '#mainNav > ul > li.menuItem';
    this.marketText = 'Rynki';
    this.rynkiInNavBarElement = element(by.cssContainingText(this.marketBaseFrame, this.marketText));
    this.bankierUrl = 'http://www.bankier.pl/';
    this.marketCurrency = '#mainNav > ul > li.menuItem > div > ul > li';
    this.mmc ='div > ul > li',
    this.elementOnSubRynkiPages = element(by.css('#breadcrumbsNav > ul > li > span'));
}

BankierDdt.prototype.openBankierPage = function () {
    browser.get(this.bankierUrl);
}

BankierDdt.prototype.clickGivenPositionInRynkiTab = function (rynkiContent) {
    browser.actions().mouseMove(this.rynkiInNavBarElement).perform();
    //element(by.cssContainingText(this.marketCurrency, rynkiContent)).click();
    this.rynkiInNavBarElement.element(by.cssContainingText(this.mmc,rynkiContent )).click();
}

BankierDdt.prototype.waitForElementRynki = function () {
    // browser.wait(function () {
    //     this.rynkiInNavBarElement.isPresent();
    // });
    expect(this.rynkiInNavBarElement.isPresent()).toBeTruthy();
    //   browser.driver.wait(protractor.until.elementIsNotVisible(this.rynkiInNavBarElement));
}

BankierDdt.prototype.waitForElementOnSubRynkiPages = function () {
    // browser.wait(function () {
    //     return this.elementOnSubRynkiPages.isPresent();
    // });
    expect(this.elementOnSubRynkiPages.isPresent()).toBeTruthy();
    // browser.driver.wait(protractor.until.elementIsNotVisible(this.elementOnSubRynkiPages));
}

module.exports = BankierDdt;
