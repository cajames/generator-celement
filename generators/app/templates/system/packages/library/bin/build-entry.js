const fs = require("fs");
const render = require("json-templater/string");
const upperCamelCase = require("uppercamelcase");
const path = require("path");
const endOfLine = require("os").EOL;
const { getDirs } = require("./utils");

const OUTPUT_PATH = path.join(__dirname, "../src/index.js");
const ELEMENT_IMPORT_TEMPLATE =
  "import {{name}} from 'element-ui/lib/{{package}}';";
const LOCAL_IMPORT_TEMPLATE = "import {{name}} from './packages/{{package}}';";
const MAIN_TEMPLATE = `/* Automatically generated by './bin/build-entry.js' */

{{include}}
import SmCollapseTransition from 'element-ui/lib/transitions/collapse-transition';

import '@company/baller-theme/src/index.scss';

const components = [
{{install}},
   SmCollapseTransition
];

const install = function(Vue, opts = {}) {

  if (install.installed) return;
  if (opts.locale) {
    SmLocale.use(opts.locale);
  }
  SmLocale.i18n(opts.i18n);

  components.map(component => {
    const baseName = ( component.extendOptions ? component.extendOptions.name : component.name )
    if (baseName) {
        // Swap out names prefixed with 'El' to 'Sm'
        const name = baseName.replace(/^El([A-Z])/, "Sm$1")
        Vue.component(name, component);
    }
  });

  Vue.use(SmLoading.directive);

  const LIBRARY = {};
  LIBRARY.size = opts.size || '';

  Vue.prototype.$loading = SmLoading.service;
  Vue.prototype.$msgbox = SmMessageBox;
  Vue.prototype.$alert = SmMessageBox.alert;
  Vue.prototype.$confirm = SmMessageBox.confirm;
  Vue.prototype.$prompt = SmMessageBox.prompt;
  Vue.prototype.$notify = SmNotification;
  Vue.prototype.$message = SmMessage;

  Vue.prototype.$LIBRARY = LIBRARY;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '{{version}}',
  locale: SmLocale.use,
  i18n: SmLocale.i18n,
  install,
  SmCollapseTransition,
{{list}}
};

module.exports.default = module.exports;
`;

// Get all components from element
const ignoredPackages = ["theme-chalk"];
const allElementComponents = getDirs(
  path.join(require.resolve("element-ui"), "..", "..", "/packages")
).filter(item => !ignoredPackages.includes(item));

// Get all local packages in the project
const localComponents = getDirs(path.join(__dirname, "../src/packages"));

// Filter out overwritten components
const elementComponentsToWrite = allElementComponents.filter(
  component => !localComponents.includes(component)
);

const importComponentTemplate = [];
const installTemplate = [];
const listTemplate = [];

elementComponentsToWrite.forEach(name => {
  const componentName = "Sm" + upperCamelCase(name);

  importComponentTemplate.push(
    render(ELEMENT_IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    })
  );

  // Any components which don't get installed
  if (
    ["SmLoading", "SmMessageBox", "SmNotification", "SmMessage"].indexOf(
      componentName
    ) === -1
  ) {
    installTemplate.push(`  ${componentName}`);
  }

  listTemplate.push(`  ${componentName}`);
});

localComponents.forEach(name => {
  const componentName = "Sm" + upperCamelCase(name);

  importComponentTemplate.push(
    render(LOCAL_IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    })
  );

  // NOTE: Be sure to exclude any components which don't get installed
  installTemplate.push(`  ${componentName}`);

  listTemplate.push(`  ${componentName}`);
});

const template = render(MAIN_TEMPLATE, {
  include: importComponentTemplate.join(endOfLine),
  install: installTemplate.join("," + endOfLine),
  version: process.env.VERSION || require("../package.json").version,
  list: listTemplate.join("," + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log("[build entry] DONE:", OUTPUT_PATH);
