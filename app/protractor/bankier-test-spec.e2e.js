'use strict'

var BankierTestPO = require('./po/bankier-test-page.e2e.js'),
    Utils = require('./Utils/Utils.js'),
    SetupData = require('./setupData/setup.js');



describe('bankier.pl site test', function () {
   var bankierMainPage, utils, data, setup, setupData;


    beforeEach(function () {
        bankierMainPage = new BankierTestPO();
        utils  = new Utils();
        setup  = new SetupData();
        setupData = setup.getConfigData();
    });
    
    it('should correctly pass by events on page', function () {
    var rows,tableCurrencyNameList,regexPattern, isKursAscending,
    dataForxeList, dataSortedFromForex;


        myLogger('Open bankier.pl site');
        bankierMainPage.openMainSite();

        myLogger('Valid Url')
       // bankierMainPage.validateUrl();
        expect(browser.getCurrentUrl()).toEqual(setupData.bankierUrl);

        myLogger('Click currency');
        bankierMainPage.clickCurrency();

        myLogger('Validate color of currency')
        bankierMainPage.validateColorOfCurrencyChanges();

        myLogger('Validate CurrencyNameContent');
        rows = bankierMainPage.validateCurrencyNameContent();
        tableCurrencyNameList = setupData.currencyOrder;

        for(var i in rows) {
            expect(rows[i]).toBe(tableCurrencyNameList[i]);
        }


        myLogger('click all currenct forex');
        bankierMainPage.clickAllCurrencyForex();

        myLogger('validate arrow beside USD');
        bankierMainPage.validateArrowBesideUSD;

        myLogger('Validate header');
        expect(bankierMainPage.validateHeader().getText()).toBe('Kursy rynkowe (forex)');

        myLogger('Sort Kurs ascending');
        bankierMainPage.sortByKursAscending();


        myLogger("validate if Kurs Is Ascending sorted");
        dataSortedFromForex = bankierMainPage.validateIfKursIsProperlySorted();
        isKursAscending = utils.checkIfInAscendingOrder(dataSortedFromForex);
        expect(isKursAscending).toBe(true);



        myLogger("validate date on Kurs Forex");
        regexPattern = setupData.dataPatternRegex;
        dataForxeList = bankierMainPage.getDateToValidate();
        for(var i in dataForxeList) {
            expect(utils.validateString(dataForxeList[i], regexPattern));
        }

        browser.sleep(5000);
    });
});
