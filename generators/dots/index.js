const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath('gitignore-template'),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('editorconfig-template'),
      this.destinationPath('.editorconfig')
    );
  }
};
