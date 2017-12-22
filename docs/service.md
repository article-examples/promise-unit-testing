# Promise with dependent Files.
In Real time, Files used to be split in to number of small files as models, libs and services. Here we will see `service` File and its included the `db` helper file where we get the data.

@[Service File]({"stubs":["service.js"], "command":"node basic.js", "project":"db"})

@[DB Helper File]({"stubs":["service.js"], "command":"node basic.js", "project":"db"})

## Unit Testing
This Unit Testing included Mocha, Chai and Sinon Libraries and included file like Service and DB Helper.

Here, you can notice there is before, beforeEach, after hook were added for method request params and response with Sinon Stubs. It actually helps to proxy the calls of DB Library.

### Why we need Sinon?
SinonJS has many good features. below are few and we used for Stubs.

- [Spies](http://sinonjs.org/releases/v4.1.3/spies)
- [Stubs](http://sinonjs.org/releases/v4.1.3/stubs)
- [Mocks](http://sinonjs.org/releases/v4.1.3/mocks)
- [Fake timers](http://sinonjs.org/releases/v4.1.3/fake-timers)

@[Service File Unit Testing]({"stubs":["serviceTest.js"], "command":"node basicTest.js", "project":"db"})
