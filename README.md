# React + TypeScript Monorepo Demo

This monorepo contains 2 packages:
* app: a React + TypeScript app based on Create React App
* math-functions: a simple TypeScript project with no dependencies, exposing a "sum()" function.

Getting Started:

```
yarn install

yarn watch
```
The "watch" script watches changes in all packages. Any changes result in hot reloading.

```
root
  - packages
    - app
      - src
      - package.json
      - tsconfig.json
    - math-functions
      - src
      - package.json
      - tsconfig.json
  - package.json
  - yarn.lock
  - lerna.json
```