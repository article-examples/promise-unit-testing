var async = require('async');

function firstCallback (customArg, callback) {
    setTimeout(() => {
        callback(null, {
            arg: customArg,
            result: 'First Result'
        });
    }, 2000);
}

function secondCallback (customArg, callback) {
    setTimeout(() => {
        callback(null, {
            arg: customArg,
            result: 'Second Result'
        });
    }, 5000);
}

function asyncParallel () {
    async.parallel({
        first: firstCallback.bind(null, 'first arg'),
        second: secondCallback.bind(null, 'second arg')
    }, function(err, results) {
        console.log('results: ', results);
    });
}