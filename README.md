# js-tdd-kit (WIP)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![bitHound Code](https://www.bithound.io/github/lfurzewaddock/js-tdd-kit/badges/code.svg)](https://www.bithound.io/github/lfurzewaddock/js-tdd-kit)
[![bitHound Dev Dependencies](https://www.bithound.io/github/lfurzewaddock/js-tdd-kit/badges/devDependencies.svg)](https://www.bithound.io/github/lfurzewaddock/js-tdd-kit/master/dependencies/npm)[![Known Vulnerabilities](https://snyk.io/test/github/lfurzewaddock/js-tdd-kit/badge.svg?targetFile=package.json)](https://snyk.io/test/github/lfurzewaddock/js-tdd-kit?targetFile=package.json)


<img src="https://raw.githubusercontent.com/github/explore/af73608b7685f722c713f3c554057270a358ae44/topics/eslint/eslint.png" height="100" alt="ESLint" title="ESLint"></img>
<img src="https://avatars0.githubusercontent.com/u/25822731?s=200&v=4" height="100" alt="Prettier" title="Prettier" style="margin-left:10px"></img>
<img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/webpack/webpack.png" height="100" alt="Webpack" title="Webpack"></img>
<img src="https://raw.githubusercontent.com/github/explore/cb39e2385dfcec8a661d01bfacff6b1e33bbaa9d/topics/babel/babel.png" width="100" alt="Babel" title="Babel"></img>
<img src="https://camo.githubusercontent.com/50dd49050de38c87a28ab6aa0b09bbe2d042cba1/687474703a2f2f737562737461636b2e6e65742f696d616765732f746170655f64726976652e706e67" height="100" alt="Tape" title="Tape"></img>
<img src="https://avatars3.githubusercontent.com/u/12507332?s=200&v=4" width="100" alt="Testem" title="Testem" style="margin:0 10px"></img>
<img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/es6/es6.png" width="100" alt="ES6" title="ES6"></img>

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


| Command                    | Description               |
| :------------------------- |:--------------------------|
| `$ npm run testBuildBrowser` | builds test files in the 'dist' directory, suitable for a web browser |
| `$ npm run testBuildNode` | builds test files in the 'dist' directory, suitable for node |
| `$ npm test` | runs testBuildNode, before running tests and piping tap results to tap-spec CLI reporter |
| `$ npm run testStart` | Webpack Dev Server compiles test files, opening output in default web browser |
| `$ npm run debug` | runs testBuildNode, before running tests with inspector protocol configured to enable process debugging |
| `$ npm run devBuild` | builds 'src' files in the 'dist' directory, configured for development, suitable for a web browser |
| `$ npm run devWatch` | runs devBuild and watches for changes |
| `$ npm run devStart` | Webpack Dev Server compiles 'src' files, opening output in default web browser |
| `$ npm run prodBuild` | builds 'src' files in the 'dist' directory, configured for production, suitable for a web browser |
| `$ npm run lint` | lint files and reports issues (read only) |
| `$ npm run lintFix` | lint files and attempts to fix issues automatically (write) |


## Further reading / Notes

### MS VS Code

I develop on MS Windows 10 Pro using WSL (Windows Subsystem for Linux) and my preferred editor is MS VS Code which includes an integrated terminal for tests to run on a bash CLI provided by WSL, the ability to carry out line by line debugging and extensions to add support for ESLint, Prettier and various other tools/utilities or other functionality.

Therefore, `.vscode/launch.json` is included in the project to support my environment, but is optional, so can be can be edited to suit your environment or excluded from your project, by removing the relevant comment in `.gitignore`.

However, currently I'm experiencing an issue with any version later than 1.18.1 up until the most recent release, currently 1.22, during debugging execution fails to stop at breakpoints set in the editor UI. [Debug Breakpoints not working #45657](https://github.com/Microsoft/vscode/issues/45657#issuecomment-373556464)

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
- [Testing Express APIs with Tape and Supertest](https://puigcerber.com/2015/11/27/testing-express-apis-with-tape-and-supertest/)
- [Unit Testing with Tape](https://jamesanaipakos.com/2016-03-01-unit-testing-with-tape)
- [Move Fast and Don’t Break Things](https://medium.freecodecamp.org/how-test-driven-development-increased-my-confidence-of-shipping-new-code-without-breaking-things-a759a570bd95)
- [Learn Tape](https://github.com/dwyl/learn-tape)
### JSDOM

jsdom is included for testing code that requires a Web Browser on the command line, such as DOM manipulation, to facilitate a fast, integrated TDD experience.

To avoid the antipattern of copying globals from a jsdom window onto the Node.js global object; https://github.com/jsdom/jsdom/wiki/Don't-stuff-jsdom-globals-onto-the-Node-global, in the file `test/jsdom.environment.js`, jsdom is made available on the Node.js global object under the namespace: `kitTddJsLfurzewaddockComGithub` which can be invoked in a fixture setup function within tests that need it. 

Currently, it is not possible to bundle jsdom with Webpack https://github.com/jsdom/jsdom/issues/2066, which is why `test/jsdom.environment.js` is written using standard ES5 CommonJS syntax, so it does not need to be included in the bundle by Webpack, but after creating the custom namespace as above, requires the webpack bundle `dist/app.bundle.js`.

Other approaches which add jsdom to the node process global object include: (*not encouraged by jsdom*);
- https://zinserjan.github.io/mocha-webpack/docs/guides/jsdom.html

Other potential ways using npm packages;
- [browser-env](https://github.com/lukechilds/browser-env)
- [window](https://github.com/lukechilds/window)
- [shim-webpack-require-for-node-tests](https://www.npmjs.com/package/shim-webpack-require-for-node-tests)

