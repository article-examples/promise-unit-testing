# Basic Promise Code
Lets have a look at the below code. It has very simple function called `basic` and its returns the promise data after 1.6 seconds (Assume that its retrieved from Database after 1.6 seconds).

@[Basic Promise Code]({"stubs":["basic.js"], "command":"node basic.js", "project":"basic"})

## Unit Testing Basics
As explained in the previous step, Adding Mocha and Chai for this basic Promise Code. In order to write basic unit testing in mocha, Understanding below two methods is must.

- describe - This function helps to groups selected test cases. so its easy to refer and maintain.
- it - This function helps to write your use case and test your library / module and expect the result.

### Mocha Hooks
There is few more functions which are considered as Hooks. below are the four important hooks where this can be place inside `describe` function before any `it` function.

- before - runs before all tests in this block.
- beforeEach - runs before each test in this block.
- afterEach - runs after each test in this block.
- after - runs after all tests in this block.

## Unit Testing
In this `Unit Testing` example, We have main group `Basic Testing` and three sub groups `Basic`, `Error Case`, `Success Case` and each sub groups has one test case. Scroll this Code below to get basic understanding.

@[Basic Promise Unit Testing]({"stubs":["basicTest.js"], "command":"node basicTest.js", "project":"basic"})

If you are still not clear, then have a look at below explaination about each test cases.
- Basic - We are testing whether `basic` is a function.
- Error Case - `basic` should return "Failure", when there is no parameter passed to the function.
- Success Case - `basic` should return given parameter as a result for success scenario.

