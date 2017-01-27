var config = require('../chimp.js')
function Page() {
    }

    Page.prototype.waitForPageLoad = function (url) {
        browser.waitUntil(function () {
            return (browser.getUrl()) === (url)
        }, config['webdriverio']['waitforTimeout'], `expected ${browser.getUrl()} to equal ` + url);
    }

module.exports = new Page();