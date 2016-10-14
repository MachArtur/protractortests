'use strict'

var BankierDdtPo = require('./po/bankier-ddt-page.e2e.js'),
    SetupData = require('./setupData/setup.js'),
    using = require('jasmine-data-provider');

describe('bankier.pl Data Driven Tests', function () {
    function rynkiContentData() {
        return [
            {
                "url":"http://www.bankier.pl/gielda",
                "text":"Giełda"
            },
            {
                "url":"http://www.bankier.pl/waluty",
                "text":"Waluty"
            },
            {
                "url":"http://www.bankier.pl/gospodarka",
                "text":"Gospodarka"
            },
            {
                "url":"http://www.bankier.pl/surowce",
                "text":"Surowce"
            },
            {
                "url":"http://www.bankier.pl/fundusze",
                "text":"Fundusze"
            },
            {
                "url":"http://www.bankier.pl/narzedzia/rynki",
                "text":"Narzędzia"
            }
        ]
    }
    var bankierMainPage, setup, setupData;


    beforeEach(function () {
        bankierMainPage = new BankierDdtPo();
        setup  = new SetupData();
        setupData = setup.getConfigData();
        bankierMainPage.openBankierPage();
    });

using(rynkiContentData, function (inputData) {
    it('test open '+inputData.text+' in Rynki naviBar Tab', function () {
        myLogger('Open bankier page');
        bankierMainPage.openBankierPage();
        myLogger('Wait for element rynki');
        bankierMainPage.waitForElementRynki();
        myLogger('Validate main page');
        expect(browser.getCurrentUrl()).toEqual(setupData.bankierUrl);
        myLogger('Open '+inputData.text+' in rynki tab' );
        bankierMainPage.clickGivenPositionInRynkiTab(inputData.text);
        myLogger('Waiting for element on sub page');
        bankierMainPage.waitForElementOnSubRynkiPages();
        myLogger('Validate url of sub page');
        expect(browser.getCurrentUrl()).toEqual(inputData.url);
    });
});
});
