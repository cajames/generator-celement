const fs = require('fs');
const mkdirp = require('mkdirp');
const render = require('json-templater/string');
const upperCamelCase = require('uppercamelcase');
const path = require('path');
const endOfLine = require('os').EOL;
const execSync = require('child_process').execSync;

const { getDirs } = require('./utils')

const ELEMENT_PROXY_TEMPLATE = `import {{name}} from 'element-ui/lib/{{package}}'
import '@company/baller-theme/src/{{package}}.scss';

// Element by default uses Chinese. Need to default to English
import '../locale';

{{name}}.install = function(Vue) {
    // Swap out names prefixed with 'El' to 'Sm'
    const name = {{name}}.name.replace(/^El([A-Z])/, "Sm$1") //TODO: Change here
    Vue.component(name, {{name}});
};

export default {{name}}
`;

// Get all components from element
const ignoredPackages = ["theme-chalk"];
const allElementComponents = getDirs(
  path.join(require.resolve("element-ui"), "..", "..", "/packages")
).filter(item => !ignoredPackages.includes(item));

// Get all local packages in the project
const localComponents = getDirs(path.join(__dirname, '../src/packages'));

// Filter out overwritten components
const elementComponentsToWrite = allElementComponents.filter(
    component => !localComponents.includes(component)
);

// Copy local packages, and index to build
const srcPath = path.join(__dirname, `../src`);
const copyPath = path.join(__dirname, `../build`);
execSync(`rm -rf ${copyPath} && cp -r ${srcPath} ${copyPath}`);

// Create all the remaining element proxy packages in build
elementComponentsToWrite.forEach(package => {
    const componentName = upperCamelCase(package);
    const template = render(ELEMENT_PROXY_TEMPLATE, {
        name: componentName,
        package
    });
    const folderPath = path.join(__dirname, `../build/packages/${package}`);
    mkdirp.sync(folderPath);
    const filePath = folderPath + '/index.js';
    fs.writeFileSync(filePath, template);
});

console.log('[build src] DONE:', copyPath);
