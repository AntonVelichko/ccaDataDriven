const selectorCnt = require('./../data/selectors.json').counter;
const expectedCnt = require('./../data/expected.json').counter;

describe('Default counter functionality', function () {


        it('TC-040 Subtract 1 gives -1', function () {
            browser.url('');
            const button = $$(selectorCnt.blackBtn)[0];
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(countValueTC040);
        })

        it('TC-041 Add 3 gives 2', function () {
            const button = $$(selectorCnt.blackBtn)[5];
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(countValueTC041);
        })
});