const expect = require('chai').expect;
const { runResolveAudit} = require('../src/scripts/resolve-audit');

describe('check resolve audit wrapping test', () => {
    it.skip('runs resolve audit & dumps output in a file after answering the questions', () => {
        expect(runResolveAudit()).to.equal(1);
    });
});
