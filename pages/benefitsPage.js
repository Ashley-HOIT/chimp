var Page = require('./defaultPage.js')
var config = require('../chimp.js')

var benefitsPage = Object.create(Page, {

    url:   { get: function () { return config['env']+'/browse/benefits'; } },
    title:   { get: function () { return 'Benefits - GOV.UK'; } },

});

module.exports = benefitsPage;
