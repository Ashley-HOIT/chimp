var Page = require('./defaultPage.js')

var govUkHomepage = Object.create(Page, {

    url:   { get: function () { return 'https://www.gov.uk/'; } },
    title:   { get: function () { return 'Welcome to GOV.UK'; } },
    benefitsLink: {get: function () { return '=Benefits'; } }



});


module.exports = govUkHomepage;