# Angular Template

## Introduction

This repository serves as a base template for all Angular projects in our organization. The template is designed to follow best practices for Angular development, ensuring consistency, scalability, and maintainability across all projects. It includes predefined configurations, structures, and tools to simplify the project setup and speed up development.

## Features

- **Modular Architecture**: Encourages a scalable and maintainable codebase.
- **SCSS Support**: Preconfigured for writing styles in SCSS.
- **Linting and Formatting**: Integrated ESLint and Prettier for code quality.
- **Testing**: Configured for unit tests using Karma and Jasmine.
- **CI/CD Ready**: Includes configurations for continuous integration pipelines.
- **Nginx Configuration**: Comes with pre-configured Nginx settings for optimized web serving.
- **Dockerfile**: Provides a Dockerfile for containerizing the application.
- **Sync Scripts**: Includes scripts for synchronizing with remote repositories.
- **Git Flow Checks**: Implements checks to ensure adherence to Git Flow workflows.

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

npm run husky:setup

npm run scripts:grant:access
```

### Default Project Structure

```text
angular-template/
├── .husky
│   ├── commit-msg
│   ├── pre-commit
├── nginx
│   ├── nginx.conf
├── node_modules
├── projects
│   ├── apps
│   ├── libs
├── scripts
│   ├── create-app.js
│   ├── create-lib.js
│   ├── git-sync.sh
│   ├── stylelint.sh
├── .browserslistrc
├── .dockerignore
├── .editorconfig
├── .gitignore
├── .lintstagedrc
├── .prettierrc
├── .stylelintrc
├── angular.json
├── bitbucket-pipelines.yml
├── CHANGELOG.md
├── commitlint.config.ts
├── docker-compose.yml
├── Dockerfile
├── eslint.config.mjs
├── husky-mod.js
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

1. Change project name.

2. Configure pipeline scripts based on project platform and needs.

3. Configure package.json scripts based on project needs.

4. Configure linting rules, prettier and husky hooks in husky-mod based on project needs.

5. Configure nginx configuration and Dockerfile based on project needs.

### Additional Instructions

1. You can create application or library directly in projects folders
   with already connected karma config using this scripts:

```
npm run ng:app [app-name]

npm run ng:lib [lib-name]
```

2. You can format (lint all files) your code in project files with this script:

```
npm run format
```

3. You can check and rebuild your libraries (package.json / package-lock.json / node_modules)
   with this script:

```
npm run npm:rebuild
```

4. You can sync your local repository state with remote using this script
   (we recommend to checkout to local main branch first):

```
npm run sync
```

5. You can test-run your application in docker container using this script:

```
APP=[app-name] npm run docker:start
```

### Development

For detailed information about development flow,
visit [development documentation](https://seacodelabs.atlassian.net/wiki/external/N2UwY2NiYzBiNGVjNDkwZGFkNjFhZDgyZTFjNTBkMjg).

**@sea-code-labs**
