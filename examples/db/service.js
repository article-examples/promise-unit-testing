const db = require('./db');

function getResultData(name) {
    let payload;

    if (name) {
        payload = {
            prop1: `value1-${name}`,
            prop2: `value2-${name}`,
        };
    }

    return new Promise((resolve, reject) => {
        db.getData(payload).then((data) => {
            if (data.error) {
                reject(data);
            }

            resolve(data);
        });
    });
}

module.exports = {
    getResultData,
};