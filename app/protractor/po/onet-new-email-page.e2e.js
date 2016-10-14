'use strict'
var onetConfig = {
    url : 'https://konto.onet.pl/register-email.html?app_id=poczta.onet.pl.front',
    browserId : '[id="searchQuery"]',
    emailIconId : '[id="mailCounter"]',
    radioButtonGenderId : '[id="f_gender_M"]',
    birthMonthSelector : '[name="birthDate[month]"]',
    birthDataSelector : '[name="birthDate[year]"]',
    radioButtonConfirm : '[id="f_confirm"]',
    submitButton : '[type="submit"]'
}

function OnetNewEmailTest() {

}

OnetNewEmailTest.prototype.openSite = function() {
    browser.ignoreSynchronization = true;
    browser.get(onetConfig.url);
}

OnetNewEmailTest.prototype.checkRadioButtonGenderMale = function () {
element(by.css(onetConfig.radioButtonGenderId)).click();
}

OnetNewEmailTest.prototype.setBornMonth = function (month) {
element(by.css(onetConfig.birthMonthSelector)).sendKeys(month);
}

OnetNewEmailTest.prototype.setBornYear = function (year) {
element(by.css(onetConfig.birthDataSelector)).sendKeys(year);
}

OnetNewEmailTest.prototype.checkConfirmationAgreements = function () {
element(by.css(onetConfig.radioButtonConfirm)).click();
}

OnetNewEmailTest.prototype.clickSubmitButton = function () {
element(by.css(onetConfig.submitButton)).click();
}

module.exports = OnetNewEmailTest;
