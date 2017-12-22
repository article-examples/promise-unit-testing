# Promise with dependent Files.
In Real time, Long files used to be split into number of small files as models, libs and services. Here, We will see `service` File which is included the `db` helper file where we get the DB data.

@[Service File]({"stubs":["service.js"], "command":"node service.js", "project":"db"})

@[DB Helper File]({"stubs":["db.js"], "command":"node db.js", "project":"db"})

## Unit Testing
This Unit Testing included Mocha, Chai and Sinon Libraries and included file like Service and DB Helper.

Here, you can notice there is before, beforeEach, after hook were added for method request params and response with Sinon Stubs. It actually helps to proxy the calls of DB Library.

### Why we need Sinon?
SinonJS has many good features. Below are few methods and we used for Stubs.

- [Spies](http://sinonjs.org/releases/v4.1.3/spies)
- [Stubs](http://sinonjs.org/releases/v4.1.3/stubs)
- [Mocks](http://sinonjs.org/releases/v4.1.3/mocks)
- [Fake timers](http://sinonjs.org/releases/v4.1.3/fake-timers)

@[Service File Unit Testing]({"stubs":["serviceTest.js"], "command":"node basicTest.js", "project":"db"})
