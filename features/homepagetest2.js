var govUkHomepage = require('../pages/govUkHomepage.js');
var benefitsPage = require('../pages/benefitsPage.js');
var config = require('../chimp.js')

    describe('Example usage of chimp with Mocha2', function () {
        describe('Example test2', function () {
            it('should navigate to the gov.uk homepage and click the benefit', function () {
                browser.url(govUkHomepage.url);
                govUkHomepage.waitForPageLoad(govUkHomepage.url);
                browser.click(govUkHomepage.benefitsLink);
                benefitsPage.waitForPageLoad(benefitsPage.url);
                expect(browser.getTitle()).to.equal(benefitsPage.title);
             });
        });

   });
