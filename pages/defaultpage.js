function Page() {
    this.title = 'My Page';
    this.waitForPageLoad = waitUntil(browser.getUrl(), 1000, 'timed out wait');
}
module.exports = new Page();