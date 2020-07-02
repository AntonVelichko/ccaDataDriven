const selectorCnt = require('./../data/selectors.json').counter;
const expectedCnt = require('./../data/expected.json').defaultCounyFunc;
const inputNumber = require('./../helpers/inputNumber.js');

describe('Default counter functionality', function () {


        it('TC-040 Subtract 1 gives -1', function () {
            browser.url('');
            const button = $$(selectorCnt.blackBtn)[0];
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedCnt.countValueTC040);
        })

        it('TC-041 Add 3 gives 2', function () {
            const button = $$(selectorCnt.blackBtn)[5];
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedCnt.countValueTC041);
        })

         // it('TC-042 LLF accept 1', function () {
         //    const button = $(selectorCnt.lowerLimitField);
         //    button.click();
         //    const input = $(selectorCnt.lowerInputField);
         //    input.click();
         //    browser.keys('Backspace');
         //    browser.keys(expectedCnt.inputMin.toString());
         //    const countValue = $(selectorCnt.countValue).getText();
         //    expect(countValue).toEqual(expectedCnt.countValueTC041);
         // })

         it('TC-042 LLF accept 1 Error Msg', function () {
            inputNumber('left', expectedCnt.inputMin);
            const result = $(selectorCnt.errorMsg).isDisplayed();
            expect(result).toEqual(false);
        })

        it('TC-043 ULF accept 9', function () {
            inputNumber('right', expectedCnt.inputMax);
            const result = $(selectorCnt.errorMsg).isDisplayed();
            expect(result).toEqual(false);
        })

        it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
            inputNumber('left', expectedCnt.inputMin);
            inputNumber('right', expectedCnt.inputMax);
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
            expect(actual).toEqual(expectedCnt.countValueTC041);
        })

});
