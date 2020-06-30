
const general = require('./../data/selectors.json').general;

describe('Complex Counter App', function () {

    describe('Getting to the page', function () {

        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('https://likejean.github.io/homework-5/');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })

    });

    describe('Elements exist', function () {

        it('TC-002 Header', function () {
            const header = general.header;
            const actual = header.waitForDisplayed();
            expect(actual).toEqual(true);
        })

        xit('TC-003 Total Result', function () {
            const header = $('h3.total-count').waitForDisplayed();
            expect(header).toEqual(true);
        })

        xit('TC-004 Counter Name', function () {
            const header = $$('h3')[1].waitForDisplayed();
            expect(header).toEqual(true);
        })

    });

});