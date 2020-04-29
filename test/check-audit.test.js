const expect = require('chai').expect;
const { runCheckAudit} = require('../src/scripts/check-audit');

describe('check audit wrapping test', () => {
    it('runs the audit and dumps output in a new file', () => {
       expect(runCheckAudit()).to.be.a('string');
    });
});
