const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    const pkgJson = require(this.destinationPath("package.json"));

    pkgJson.scripts = pkgJson.scripts || {};
    pkgJson.scripts["lint"] = "eslint .";
    pkgJson.scripts["lint:fix"] = "eslint . --fix";
    pkgJson.scripts["prettier"] = 'prettier --write "./**/*.{js,jsx,json}"';
    pkgJson.scripts["prettier:check"] =
      'prettier --check "./**/*.{js,jsx,json}"';

    this.fs.writeJSON(this.destinationPath("package.json"), pkgJson);

    this.fs.delete(this.destinationPath(".eslintrc"));

    this.fs.copyTpl(
      this.templatePath("eslintignore-template"),
      this.destinationPath(".eslintignore"),
    );

    this.fs.copyTpl(
      this.templatePath("eslintrc-template.json"),
      this.destinationPath(".eslintrc.json"),
    );

    this.fs.copyTpl(
      this.templatePath("prettierignore-template"),
      this.destinationPath(".prettierignore"),
    );

    this.fs.copyTpl(
      this.templatePath("prettierrc-template.json"),
      this.destinationPath(".prettierrc.json"),
    );
  }

  install() {
    this.npmInstall(
      [
        "eslint",
        "eslint-config-prettier",
        "eslint-plugin-prettier",
        "prettier",
      ],
      { "save-dev": true },
    );
  }
};
