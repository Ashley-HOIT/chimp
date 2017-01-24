//var govUkHomepage = require('../pages/govUkHomepage.js');
//var benefitsPage = require('../pages/benefitsPage.js');

var govUkHomepage = new require('../pages/govUkHomepage.js');
var benefitsPage = new require('../pages/benefitsPage.js');

describe('Chimp Mocha', function() {
    describe('Page title', function () {
        it('should be set by the Meteor method @watch', function () {
            browser.url(govUkHomepage.url);
            expect(browser.getTitle()).to.equal(govUkHomepage.title);
            var benefitsLink = govUkHomepage.benefitsLink;
            browser.click(benefitsLink);
            expect(browser.getTitle()).to.equal(benefitsPage.title);
        });
    });
});