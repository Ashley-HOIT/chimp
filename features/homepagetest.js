var govUkHomepage = require('../pages/govUkHomepage.js');
var benefitsPage = require('../pages/benefitsPage.js');

    describe('Example test', function () {
        it('should navigate to the gov.uk homepage and click the benefit @watch', function () {
            browser.url(govUkHomepage.url);
            govUkHomepage.waitForPageLoad(govUkHomepage.url);
            browser.click(govUkHomepage.benefitsLink);
            benefitsPage.waitForPageLoad(benefitsPage.url);
            expect(browser.getTitle()).to.equal(benefitsPage.title);
        });
    });
