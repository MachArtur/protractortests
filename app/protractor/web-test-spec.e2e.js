'use strict'

var WebPoOnetMain = require('./po/web-test-page.e2e.js'),
    OnetNewEmailTest = require('./po/onet-new-email-page.e2e.js');

describe('Onet.pl site tests', function () {
    var onetMainPage,
        onetNewEmailPage;

    beforeEach(function(){
        onetMainPage = new WebPoOnetMain();
        onetNewEmailPage = new OnetNewEmailTest();
        browser.driver.manage().window().maximize();
    });

    it('should correctly use search browser', function () {
        //when
        onetMainPage.openSite();
        onetMainPage.enterEditInfo("Halo");
        onetMainPage.clickSearchButton();
        //then
        expect(browser.getCurrentUrl()).toEqual('http://szukaj.onet.pl/wyniki.html?qt=Halo');
    });


    it('should go to email auth page', function () {
       //when
        onetMainPage.openSite();
        onetMainPage.goToEmailAuth();
        //then
        expect(browser.getCurrentUrl()).toEqual('https://konto.onet.pl/auth.html?app_id=poczta.onet.pl.front');
    });



    it('should correctly fill pools in create new email site', function () {
        onetNewEmailPage.openSite();

        //when
        onetMainPage.fillInputField('f_nameSurname', 'John Doe');
        onetNewEmailPage.checkRadioButtonGenderMale();
        onetMainPage.fillInputField('f_birthDate_day', '11');
        onetNewEmailPage.setBornMonth('lutego');
        onetNewEmailPage.setBornYear('1991')
        onetNewEmailPage.checkConfirmationAgreements();
        onetMainPage.fillInputField('f_postcodePlace', 'Wrocław 59-800');
        onetNewEmailPage.clickSubmitButton();

        //then
        expect(element(by.css('[class="info g-recaptcha-responseInfo error"]')).isPresent()).toBe(true);
        browser.sleep(5000);
    });

    it('should appear new button on action bar in result of scroll down action', function () {
        onetMainPage.openSite();
        //when then
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
            browser.sleep(500);
            expect(element(by.css('[href="#lista-polecane"]')).isPresent()).toBe(true);
        })
    });


});
