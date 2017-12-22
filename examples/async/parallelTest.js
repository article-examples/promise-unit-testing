const mocha = require('mocha');
const expect = require('chai').expect;
const sinon = require('sinon');
const db = require('./db');
const asyncFile = require('./parallel');

describe('Async Parallel.js', () => {
    let params, resultValues, userDataStub, activityDataStub, activityDataSpy;

    before(() => {
        params = ['first arg', 'second arg'];
        resultValues = ['First Result', 'Second Result'];
    });

    beforeEach(() => {
        userDataStub = sinon.stub(db, 'userData').callsFake((arg, callback) => {
            callback(null, {
                arg,
                result: resultValues[0]
            });
        });

        activityDataStub = sinon.stub(db, 'activityData').callsFake((arg, callback) => {
            callback(null, {
                arg,
                result: resultValues[1]
            });
        });        
    });

    it('should return the response', () => {
        return asyncFile.myAsyncParallel(function(error, results) {
            expect(results).to.deep.equal({
                first: {
                    arg: params[0],
                    result: resultValues[0]
                },
                second: {
                    arg: params[1],
                    result: resultValues[1]
                }
            });
        });
    });
});