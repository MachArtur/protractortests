exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
   // specs:['app/protractor/*.e2e.js'],
  //  specs:['app/protractor/bankier-test-spec.e2e.js'],
    specs:['app/protractor/bankier-ddt-spec.e2e.js'],
    baseUrl: 'http://localhost:9000/',


    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        defaultTimeoutInterval: 1000 * 6000
    },
    params : {
       logger : null,
        myLogger : null
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        var log4js = require('log4js');
        // log4js.loadAppender('file');
       // log4js.addAppender(log4js.appenders.file('logs/cheese.log'), 'cheese');
        logger = log4js.getLogger();
        myLogger = function (text) {
            browser.controlFlow().execute(function () {
                logger.debug(text);
            });
        }


    }
};
