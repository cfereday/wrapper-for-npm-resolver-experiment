const shell = require('shelljs');

const runResolveAudit = () => {
    return shell.exec('npx resolve-audit > resolving-audit-test.json');
};

module.exports = {
    runResolveAudit,
};

