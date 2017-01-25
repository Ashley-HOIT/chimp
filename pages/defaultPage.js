function Page() {
    }

    Page.prototype.waitForPageLoad = function (url) {
        browser.waitUntil(function () {
            return (browser.getUrl()) === (url)
        }, 1000, `expected ${browser.getUrl()} to equal ` + url);
    }

module.exports = new Page();