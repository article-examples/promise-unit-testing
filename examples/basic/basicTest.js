const mocha = require('mocha');
const expect = require('chai').expect;
const basicFile = require('./basic');

describe('Basic Testing', () => {
    const noop = () => {};

    describe('Basic', () => {
        it('should have method `basic`', () => {
            expect(basicFile).to.be.an('object');
            expect(typeof basicFile.basic).to.equal('function');
        });

        // You can add more basic Test Cases.
    });

    describe('Error Case', () => {
        it('should return Error message for empty param', () => {
            return basicFile.basic().then(noop, (errorMessage) => {
                expect('Failure').to.equal(errorMessage);
            });
        });

        // You can add more Error Cases.
    });

    describe('Success Case', () => {
        it('should return param with Hello for valid param', () => {
            return basicFile.basic('Success').then((successMessage) => {
                expect('Success').to.equal(successMessage);
            }, noop);
        });

        // You can add more Success Cases.
    });

});
