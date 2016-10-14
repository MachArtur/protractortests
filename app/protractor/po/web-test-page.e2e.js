var onetConfig = {
    url : 'http://www.onet.pl/',
    browserId : '[id="searchQuery"]',
    emailIconId : '[id="mailCounter"]',
    searchButtonId : '[id="searchSubmit"]'
}


function WebTest() {

}

WebTest.prototype.openSite = function() {
    browser.ignoreSynchronization = true;
    browser.get(onetConfig.url);
}

WebTest.prototype.clickElemenyByTitle = function (title) {
    element(by.cssContainingText(title)).click();
}

WebTest.prototype.clickSearchButton = function () {
    element(by.css(onetConfig.searchButtonId)).click();
}

WebTest.prototype.enterEditInfo = function(title) {
    element(by.css(onetConfig.browserId)).sendKeys(title);
}

WebTest.prototype.goToEmailAuth = function () {
     element(by.css(onetConfig.emailIconId)).click();
}

WebTest.prototype.fillInputField = function (id, text) {
    element(by.css('[id="'+id+'"]')).sendKeys(text);
}

module.exports = WebTest;
