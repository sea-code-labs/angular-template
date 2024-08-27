# Angular Template

## Introduction

This repository serves as a base template for all Angular projects in our organization. The template is designed to follow best practices for Angular development, ensuring consistency, scalability, and maintainability across all projects. It includes predefined configurations, structures, and tools to simplify the project setup and speed up development.

## Features

- **Modular Architecture**: Encourages a scalable and maintainable codebase.
- **SCSS Support**: Preconfigured for writing styles in SCSS.
- **Linting and Formatting**: Integrated ESLint and Prettier for code quality.
- **Testing**: Configured for unit tests using Karma and Jasmine.
- **CI/CD Ready**: Includes configurations for continuous integration pipelines.

## Getting Started

### Prerequisites

To work with this template, ensure that you have the following installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.dev/tools/cli)
- [Git](https://git-scm.com/)

### Installation

1.Clone the repository:

```bash
git clone git@bitbucket.org:sea-code-labs/angular-template.git
cd angular-template
```

2.Install the project dependencies:

```bash
npm install
```

### Project Structure

```text
angular-template/
├── .angular
├── .husky
│   ├── commit-msg
│   ├── pre-commit
├── .idea
├── .vscode
├── node_modules
├── projects
│   ├── apps
│   ├── libs
├── scripts
│   ├── create-app.js
│   ├── create-lib.js
├── .browserslistrc
├── .editorconfig
├── .gitignore
├── .lintstagedrc
├── .prettierrc
├── .stylelintrc.json
├── angular.json
├── bitbucket-pipelines.yml
├── CHANGELOG.md
├── commitlint.config.ts
├── eslint.config.ts
├── karma.conf.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.eslint.json
├── tsconfig.json
├── tsconfig.spec.json
```

### Configuration

1.Change project name.

2.Configure pipeline scripts based on project platform and needs.

3.Configure package.json scripts based on your needs.

### Development

For detailed information about development flow,
visit [development documentation]().
