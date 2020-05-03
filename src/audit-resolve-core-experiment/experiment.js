const { dropResolvedActions } = require('audit-resolve-core/statusManager');
const auditResults = require('../../audit-results.json');

const auditOutput = dropResolvedActions(auditResults.actions);
console.log('*****auditOutput*****', auditOutput);
