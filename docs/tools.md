## MochaJs
[Mocha](https://mochajs.org/) is a JavaScript test framework running on node.js, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library. It can be used with libraires like should.js, expect.js and chai.js.

@[Simple Mocha Example]({"stubs":["mocha.js"], "command":"node mocha.js", "project":"snippets"})

## ChaiJs
[Chai](http://chaijs.com/) is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

@[Simple Chai Example]({"stubs":["chai.js"], "command":"node chai.js", "project":"snippets"})

## SinonJs
[SinonJs](http://sinonjs.org/) is a standalone library for test spies, stubs and mocks for JavaScript. Works with any unit testing framework.

@[Simple Sinon Example]({"stubs":["sinon.js"], "command":"node sinon.js", "project":"snippets"})

## Installation
Use below any one command to install Mocha, Chai and Sinon Module and these must to be installed as Dev Dependencies modules, because it’s not required when application running in the server but during build.

```
$ npm i -D mocha chai sinon
            or
$ npm install mocha chai sinon --save-dev
```

## Code Coverage
If you are very much interested on how much code covered during unit testing. Try [Istanbul](https://istanbul.js.org/) which make test coverage simple with various types of report format.

```
$ npm i -D nyc
```