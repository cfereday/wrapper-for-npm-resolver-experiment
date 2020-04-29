const shell = require('shelljs');

const runCheckAudit = () => {
    shell.cd("src/example-project/");
    return shell.exec('npx check-audit > check-audit.json');
};
module.exports = {
    runCheckAudit,
};

