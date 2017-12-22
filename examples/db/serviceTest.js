const mocha = require('mocha');
const expect = require('chai').expect;
const sinon = require('sinon');
const db = require('./db');
const service = require('./service');

describe('service.js', () => {
    let noop, label, payload,  response, dbStub;

    before(() => {
        noop = () => {};
        label = 'emp';
        payload;
        response;
        dbStub;
    });

    beforeEach(() => {
        payload = {
            prop1: `value1-${label}`,
            prop2: `value2-${label}`,
        };

        response = {
            name1: 'value1',
            name2: 'value2',
        };

        dbStub = sinon.stub(db, 'getData').callsFake(() => {
            return Promise.resolve(response);
        });
    });

    afterEach(() => {
        dbStub.restore();
    });

    it('should return error response', () => {
        return service.getResultData().then(noop, (data) => {
            expect(data).to.deep.equal({
                error: true,
            });
        });
    });

    it('should return success response', () => {
        return service.getResultData(label).then((data) => {
            expect(data).to.deep.equal(response);
        });
    });
});