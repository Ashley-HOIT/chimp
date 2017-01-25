var Page = require('./defaultPage.js')

var benefitsPage = Object.create(Page, {

    url:   { get: function () { return 'https://www.gov.uk/browse/benefits'; } },
    title:   { get: function () { return 'Benefits - GOV.UK'; } },

});

module.exports = benefitsPage;
