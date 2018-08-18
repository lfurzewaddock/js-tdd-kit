# js-tdd-kit (JavaScript TDD Kit)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Known Vulnerabilities](https://snyk.io/test/github/lfurzewaddock/js-tdd-kit/badge.svg?targetFile=package.json)](https://snyk.io/test/github/lfurzewaddock/js-tdd-kit?targetFile=package.json)

<img src="https://raw.githubusercontent.com/github/explore/af73608b7685f722c713f3c554057270a358ae44/topics/eslint/eslint.png" height="75" alt="ESLint" title="ESLint"></img>
<img src="https://avatars0.githubusercontent.com/u/25822731?s=200&v=4" height="75" alt="Prettier" title="Prettier" style="margin-left:10px"></img>
<img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/webpack/webpack.png" height="75" alt="Webpack" title="Webpack"></img>
<img src="https://raw.githubusercontent.com/github/explore/cb39e2385dfcec8a661d01bfacff6b1e33bbaa9d/topics/babel/babel.png" width="75" alt="Babel" title="Babel"></img>
<img src="https://raw.githubusercontent.com/lfurzewaddock/tape/master/tape.js-logo.png" height="75" alt="Tape" title="Tape"></img>
<img src="https://avatars3.githubusercontent.com/u/12507332?s=200&v=4" width="75" alt="Testem" title="Testem" style="margin:0 10px"></img>
<img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/es6/es6.png" width="75" alt="ES6" title="ES6"></img>
<img src="https://avatars0.githubusercontent.com/u/9271229?s=100&v=4" width="75" alt="jsdom" title="jsdom"></img>


## Getting started

1. Clone the repository into your "new-project" directory

    ```bash
    git clone git@github.com:lfurzewaddock/js-tdd-kit.git new-project && cd new-project
    ```

2. Remove the git repository, and then initialise a new one

    ```bash
    rm -rf .git && git init
    ```

3. Remove README and replace with your own

    ```bash
    rm README.md && touch README.md
    ```

4. Update `package.json` and install dependencies

    ```bash
    npm init && npm install
    ```
    
    Don't forget to update the description, contact details, URL's, etc. in the `package.json` file.

5. Test configuration

Run the various commands on the sample files included. Assuming everything works as expected feel free to delete the contents of both 'src' and 'test' directories, excluding files `test/utils.js` and `test/jsdom.environment.js` which are used to include jsdom. See sample files for an example implementation. 

## Commands


| $ npm run ...              | Description:                                                            |
|-------------------------------------|-------------------------------------------------------------------------|
| `testBuildBrowser`        | builds 'test' files with Webpack in to the 'dist' directory, suitable for a web browser.  Open `dist/index.html` in a web browser. See test results in the dev tools console. |
| `testBuildNode`           | builds 'test' files with Webpack in to the 'dist' directory, suitable for node.  Use `$ npm run testNodeBundle` or `$ node_modules/.bin/tape dist/jsdom.environment.js dist/app.bundle.js` |
| `testNodeBundle`          | runs testBuildNode, before running tests, piping results to tap-spec CLI reporter. |
| `test`                    | runs ES6+ tests using ES module loader, avoiding Babel, piping results to tap-spec CLI reporter. |
| `testStart`               | Webpack Dev Server compiles 'test' files, opening output in your default web browser.  See test results in the dev tools console. |
| `testem`                  | TDD UX: runs ES6+ tests using ES module loader, avoiding Babel, with fail/pass tally in console and watches for changes. |
| `debug`                   | runs ES6+ tests with inspector protocol configured to enable process debugging using ES module loader, avoiding Babel |
| `devBuild`                | builds 'src' files in to the 'dist' directory, configured for development, suitable to open in a web browser |
| `devWatch`                | runs devBuild and watches for changes |
| `devStart`                | Webpack Dev Server compiles 'src' files, opening output in default web browser |
| `prodBuild`               | builds 'src' files in to the 'dist' directory, configured for production, suitable to open in a web browser |
| `lint`                    | lint files and reports issues (read only) |
| `lintFix`                 | lint files and attempts to fix issues automatically (write) |
| `coverage`                | sets node env to dev, NYC instruments code by running ES6+ tests using ES module loader, avoiding Babel |
| `coverReport`             | runs coverage command before NYC generates HTML report from instumented code, opening report in default web browser |


## Further reading / Notes

### MS VS Code

I develop on MS Windows 10 Pro using WSL (Windows Subsystem for Linux) and my preferred editor is MS VS Code which includes an integrated terminal for tests to run on a bash CLI provided by WSL, the ability to carry out line by line debugging and extensions to add support for ESLint, Prettier and various other tools/utilities or other functionality.

Therefore, `.vscode/launch.json` is included in the project to support my environment, but is optional, so can be can be edited to suit your environment or excluded from your project, by removing the relevant comment in `.gitignore`.

MS VS Code users, should either install current release of MS VS Code extension: [WSL workspaceFolder](https://marketplace.visualstudio.com/items?itemName=lfurzewaddock.vscode-wsl-workspacefolder) or replace command reference in .vscode/launch.json

### Webpack

Currently, Webpack 3 is in use, but upgrade to Webpack 4 after it has matured by a few months is planned.

#### Babel

Webpack is set to use Babel configured in `.babelrc` to transpile ES6+ to ES5. The source files under the `src` directory use ESM (ECMAScript Module) syntax and are transpiled using plugins 'add-module-exports' and 'transform-es2015-modules-umd' to ES5 UMD (Universal Module Definition), so they can be run in Node or a Web Browser.

#### ESLint

The Webpack plugin 'eslint-loader' runs ESLint configured in `.eslintrc.json` and `.eslintignore` automatically on code in the `src` directory for development and production builds, but not test code and will abort reporting any issues found.

### Prettier

Prettier configured in `.prettierrc.json` and `.prettierignore` can be run from the command line (See lint commands above), using the package 'prettier-eslint' prettier is run first then ESlint, so ESLint rules take precedence. Webpack should be set to handle this automatically, but currently is not.

### Tape/TDD

- [TDD the RITE Way](https://medium.com/javascript-scene/tdd-the-rite-way-53c9b46f45e3)
- [Why I use Tape Instead of Mocha & So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)
- [5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)
- [The Outrageous Cost of Skipping TDD & Code Reviews](https://medium.com/javascript-scene/the-outrageous-cost-of-skipping-tdd-code-reviews-57887064c412)
- [Github Tape repo](https://github.com/substack/tape)
- [Github tape-promise repo](https://github.com/jprichardson/tape-promise)
- [Testing Express APIs with Tape and Supertest](https://puigcerber.com/2015/11/27/testing-express-apis-with-tape-and-supertest/)
- [Unit Testing with Tape](https://jamesanaipakos.com/2016-03-01-unit-testing-with-tape)
- [Move Fast and Don’t Break Things](https://medium.freecodecamp.org/how-test-driven-development-increased-my-confidence-of-shipping-new-code-without-breaking-things-a759a570bd95)
- [Learn Tape](https://github.com/dwyl/learn-tape)

### JSDOM

jsdom is included for testing code that requires a Web Browser on the command line, such as DOM manipulation, to facilitate a fast, integrated TDD experience.

To avoid the antipattern of copying globals from a jsdom window onto the Node.js global object; https://github.com/jsdom/jsdom/wiki/Don't-stuff-jsdom-globals-onto-the-Node-global, in the file `test/jsdom.environment.js`, jsdom is made available on the Node.js global object under the namespace: `jsTddKitLfurzewaddockComGithub` which can be invoked in a fixture setup function within tests that need it. 

Currently, it is not possible to bundle jsdom with Webpack https://github.com/jsdom/jsdom/issues/2066, which is why `test/jsdom.environment.js` is written using standard ES5 CommonJS syntax, so it does not need to be included in the bundle by Webpack.

Other approaches *not encouraged by jsdom* which add jsdom to the node process global object include: ;
- https://zinserjan.github.io/mocha-webpack/docs/guides/jsdom.html

Other potential ways using npm packages;
- [browser-env](https://github.com/lukechilds/browser-env)
- [window](https://github.com/lukechilds/window)
- [jsdom-global](https://github.com/rstacruz/jsdom-global)
- [shim-webpack-require-for-node-tests](https://www.npmjs.com/package/shim-webpack-require-for-node-tests)

