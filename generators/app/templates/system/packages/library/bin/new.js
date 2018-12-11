const fs = require('fs');
const mkdirp = require('mkdirp');
const render = require('json-templater/string');
const upperCamelCase = require('uppercamelcase');
const path = require('path');
const endOfLine = require('os').EOL;
const execSync = require('child_process').execSync;
const { getDirs } = require('./utils')

if (!process.argv[2]) {
  console.error(`\nError: Please enter new component name.

e.g:
- yarn new componentname
- yarn new my-cool-component
`);
  process.exit(1);
}

const packageName = process.argv[2];

if (!packageName.match(/^[a-z][a-z\-]+$/)) {
  console.error(`\nERROR: Component name must follow kebab-case format. (Lowercase, hypen separated):

e.g:
- yarn new componentname
- yarn new my-cool-component

`);
  process.exit(1);
}

const PACKAGES_FOLDER = path.join(__dirname, '..', 'src', 'packages')
const STYLES_FOLDER = path.join(__dirname, '..', '..', 'theme', 'src')
const INDEX_TEMPLATE = `
import {{name}} from './src/{{name}}.vue'
import '<%= themeNpmName %>/src/{{package}}.scss';

{{name}}.install = function(Vue) {
    const name = ( {{name}}.extendOptions ? {{name}}.extendOptions.name : {{name}}.name )
    Vue.component(name, {{name}});
};

export default {{name}}
`
const VUE_TEMPLATE = `
<script>
export default {
    name: "<%= capAbb %>{{name}}"
}
</script>

<template>
    <span>'ello</span>
</template>
`

// Check if package folder already exists
const existingPackages = getDirs(PACKAGES_FOLDER)
if(existingPackages.includes(packageName)) {
    console.error(`Package with name "${packageName}" already exists. Please use another.` + endOfLine)
    process.exit(1)
}

// Create package folder.
mkdirp.sync(path.join(PACKAGES_FOLDER, packageName, 'src'));

// Create index.
const componentName = upperCamelCase(packageName)
const indexContent = render(INDEX_TEMPLATE, {
    name: componentName,
    package: packageName
});
const indexPath = path.join(PACKAGES_FOLDER, packageName) + '/index.ts'
fs.writeFileSync(indexPath, indexContent);

// Create vue.
const vueContent = render(VUE_TEMPLATE, {
    name: componentName,
});
const vuePath = path.join(PACKAGES_FOLDER, packageName, 'src') + `/${componentName}.vue`
fs.writeFileSync(vuePath, vueContent);

// Create stylesheet.
const stylesheetPath = STYLES_FOLDER + `/${packageName}.scss`
fs.writeFileSync(stylesheetPath, `// Write styles for the ${componentName} component here.` + endOfLine);

// Append to index.scss
const indexStylesheetPath = STYLES_FOLDER + `/index.scss`;
fs.appendFileSync(indexStylesheetPath, `@import './${packageName}.scss';` + endOfLine);

console.log(`${componentName} component created. Now rebuilding entry index file.`)
execSync(`yarn build:entry`)