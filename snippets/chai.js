const mocha = require('mocha');
const expect = require('chai').expect;

describe('Simple Chai Testing', () => {
    describe('Basic', () => {

        it('Test Case 1', () => {
            expect(1+1).to.equal(2);
        });

        it('Test Case 2', () => {
            expect(typeof (1+1)).to.equal('number');
        });

        it('Test Case 2', () => {
            const response = {
                a: {
                  b: ['x', 'y']
                }
            };
            expect(response).to.have.nested.property('a.b[1]');
        });

    });

});