## MochaJs
[Mocha](https://mochajs.org/) is a JavaScript test framework running on node.js, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library. It can be used with libraires like should.js, expect.js and chai.js.

This gives basic methods to write test cases.

## ChaiJs
[Chai](http://chaijs.com/) is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## SinonJs
[SinonJs](http://sinonjs.org/) is a standalone library for test spies, stubs and mocks for JavaScript. Works with any unit testing framework.

## Installation
Use below command to install Mocha, Chai and Sinon Module and these modules are need to be installed as Dev Dependencies, because its not required when application running in the server but during build.

```
$ npm i -D mocha chai sinon
$ npm install mocha chai sinon --save-dev
```

## Code Coverage
If you are very much interested on how much code covered during unit testing. Try [Istanbul](https://istanbul.js.org/) which make test coverage simple with various types of report format.

```
$ npm i -D nyc
```