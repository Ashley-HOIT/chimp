var Page = require('./defaultPage.js')
var config = require('../chimp.js')

var govUkHomepage = Object.create(Page, {

    url:   { get: function () { return config['env']+'/' } },
    title:   { get: function () { return 'Welcome to GOV.UK'; } },
    benefitsLink: {get: function () { return '=Benefits'; } }



});


module.exports = govUkHomepage;