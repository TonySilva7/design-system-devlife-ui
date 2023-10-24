# eslint-config-example

This package provides a set of ESLint configurations for use in JavaScript projects (ReactJS, NextJS and NodeJS).
The configurations are designed to enforce best practices and maintain code consistency.

To use this package, simply install it as a development dependency and extend the desired
configuration in your project's ESLint configuration file.

For more information on ESLint and how to configure it, see https://eslint.org/docs/user-guide/configuring.

## Installation

To install this package, run:
```bash
npm i -D @devlife-ui/eslint-config
```

Create a file `eslintrc.json` in the root of your project, and extend the package configuration, indicating the project type (ReactJS, NextJS, NodeJS):
```bash
{
  "extends": "@devlife-ui/eslint-config/react"
}
```


