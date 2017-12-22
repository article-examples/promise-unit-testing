## Async.js
[Async](http://caolan.github.io/async/) is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript. Although originally designed for use with Node.js and installable via `npm install --save async`, it can also be used directly in the browser.

In this below example, We use `async.parallel` where we need to trigger to the DB Service Method at the same time.

@[Service File]({"stubs":["parallel.js"], "command":"node parallel.js", "project":"async"})

### Unit Testing

Similar to Previous example, Added Mocha, Chai and Sinon and one example for success scenario.

Mainly we are by passing the DB Methods `db.userData` and `db.activityData` and return the custom data using Sinon Stub.

In this test case, we are checking the expected result is deeply equal to the method response.

@[Unit Testing with Async.js]({"stubs":["parallelTest.js"], "command":"node parallelTest.js", "project":"async"})

