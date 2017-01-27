var local = 'http://localhost'
var int = 'http://www.google.com'
var sit ='https://www.chelseafc.com/'
var stg = 'https://www.gov.uk'


switch(process.env['chimp.env']) {
    case 'int':
        var env = int
        break;
    case 'sit':
        var env = sit
        break;
    case 'stg':
        var env = stg
        break;
    default:
        var env = local
}

module.exports = {
// ---- Mocha ----
    mocha: true,
    mochaCommandLineOptions: {
        bail: false
        },
    mochaConfig: {
        reporter:'mocha-circleci-reporter',
        reporterOptions: {
            mochaFile:'reports/test-results.xml',
        },
    },

// ---- Webdriver-IO ----
     webdriverio: {
        screenshotPath:'screenshots/',
        screenshotOnReject: true,
        waitforTimeout: 5000,
        logLevel: 'verbose',
        logOutput:'logs/'

    },


     // - - - - SELENIUM-STANDALONE
      seleniumStandaloneOptions: {
        // check for more recent versions of selenium here:
        // http://selenium-release.storage.googleapis.com/index.html
        version: '3.0.0',
        baseURL: 'https://selenium-release.storage.googleapis.com',
        drivers: {
          chrome: {
            // check for more recent versions of chrome driver here:
            // http://chromedriver.storage.googleapis.com/index.html
            version: '2.27',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com'
          },
          ie: {
            // check for more recent versions of internet explorer driver here:
            // http://selenium-release.storage.googleapis.com/index.html
            version: '2.50.0',
            arch: 'ia32',
            baseURL: 'https://selenium-release.storage.googleapis.com'
          },
          firefox: {
            // check for more recent versions of gecko  driver here:
            // https://github.com/mozilla/geckodriver/releases
            version: '0.13.0',
            arch: process.arch,
            baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
//            marionette:true
          }
       },
        log:'logs/'

      },

      env:env,


}

