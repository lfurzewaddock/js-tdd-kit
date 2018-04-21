# js-tdd-kit

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

# WIP

Further reading;
[Why I use Tape Instead of Mocha & So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)

## JSDOM

jsdom is included for testing code that requires a Web Browser on the command line, such as DOM manipulation, to facilitate a fast, integrated TDD development experience.

To avoid the antipattern of copying globals from a jsdom window onto the Node.js global object; https://github.com/jsdom/jsdom/wiki/Don't-stuff-jsdom-globals-onto-the-Node-global, in the file `test/jsdom.environment.js`, jsdom is made available on the Node.js global object under the namespace: `kitTddJsLfurzewaddockComGithub` which can be invoked in a fixture setup function within tests that need it. Currently, it is not possible to bundle jsdom with Webpack https://github.com/jsdom/jsdom/issues/2066, which is why `test/jsdom.environment.js` is written using standard ES5 CommonJS syntax, so it does not need to be included in the bundle by Webpack, but after creating the custom namespace as above, requires the webpack bundle `dist/app.bundle.js`.

Other approaches which add jsdom to the node process global object include: (*not encouraged by jsdom*);
- https://zinserjan.github.io/mocha-webpack/docs/guides/jsdom.html
- https://www.npmjs.com/package/shim-webpack-require-for-node-tests

Other potential ways using npm packages;
- [browser-env](https://github.com/lukechilds/browser-env)
- [window](https://github.com/lukechilds/window)

