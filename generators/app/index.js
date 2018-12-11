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
      // {
      //   type: "confirm",
      //   name: "someAnswer",
      //   message: "Would you like to enable this option?",
      //   default: true
      // }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      // this.props = props;
    });
  }

  writing() {

    this.fs.copyTpl(this.templatePath("system/**/*"), this.destinationRoot(), {
      yay: "this should work"
    });

    this.fs.copyTpl(
      this.templatePath("system/**/.*"),
      this.destinationRoot(),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("system/**/.**/*"),
      this.destinationRoot(),
      {}
    );
  }

  install() {
    this.yarnInstall();
  }
};
