"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the impeccable ${chalk.red(
          "generator-celement"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "systemName",
        message:
          "What is the name of your Design System? (e.g. Material, Lightning, Polaris...)",
        default: "Celement"
      },
      {
        type: "input",
        name: "orgName",
        message: "What is the name of your npm_org?",
        default: ""
      },
      {
        type: "input",
        name: "systemAbbreviation",
        message:
          "What would you design system element prefix be? (e.g. <cel-...>)",
        default: "cel"
      },
      {
        type: "input",
        name: "repoUrl",
        message: "What is the github url for this repo?",
        default: ""
      },
      {
        type: "input",
        name: "primaryColor",
        message: "What is your brand primary color",
        default: "#f14a00"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      const abb = props.systemAbbreviation;
      const npmName = props.systemName.toLowerCase();
      const orgName = props.orgName.toLowerCase();
      const libNpmName = orgName ? `@${orgName}/${npmName}` : npmName
      const themeNpmName = libNpmName + '-theme'

      props.sysAbb = abb.toLowerCase();
      props.capAbb = abb[0].toUpperCase() + abb.slice(1);
      props.npmName = npmName;
      props.libNpmName = libNpmName
      props.themeNpmName = themeNpmName

      this.props = props;
    });
  }

  writing() {
    const templateValues = this.props;

    // Copy all files
    this.fs.copyTpl(
      this.templatePath("system/**/*"),
      this.destinationRoot(),
      templateValues
    );

    // Copy all .dot files
    this.fs.copyTpl(
      this.templatePath("system/**/.*"),
      this.destinationRoot(),
      templateValues
    );

    // Copy all files in .dot folders
    this.fs.copyTpl(
      this.templatePath("system/**/.**/**/*"),
      this.destinationRoot(),
      templateValues
    );
  }

  install() {
    this.yarnInstall();
  }
};
