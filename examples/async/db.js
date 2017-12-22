function userData (customArg, callback) {
    setTimeout(() => {
        callback(null, {
            arg: customArg,
            result: 'First Result'
        });
    }, 2000);
}

function activityData (customArg, callback) {
    setTimeout(() => {
        callback(null, {
            arg: customArg,
            result: 'Second Result'
        });
    }, 5000);
}

module.exports = {
    userData,
    activityData,
};