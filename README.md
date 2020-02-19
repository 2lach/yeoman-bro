# Yo bro

## understanding yeoman by building a couple of generators

## setup it up

```
npm install -g yo 2lach-yeoman-generator
```

## Using generators

### scaffold dots

creates a [.gitignore](generators/dots/templates/gitignore-template) and a [.editorconfig](generators/dots/templates/editorconfig-template) in project-root

```bash
yo 2lach:dots
```

### scaffold linting

creates [.eslintrc.json](generators/linting/templates/eslintrc-template.json) [.prettierrc.json](generators/linting/templates/prettierrc-template.json) & [.prettierignore](generators/linting/templates/prettierignore-template) in project-root

```bash
yo 2lach:linting
```

<!--
### tests

* wip

### react component

* wip
-->

***Please note that this project is currently NOT on npmjs.org and these commands are just examples and will not work**
