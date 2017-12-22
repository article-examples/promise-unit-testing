function getData(payload) {
    return new Promise((resolve, reject) => {
        if(!payload) {
            reject({
                error: true,
            });
        }

        setTimeout(() => {
            resolve({
                name1: 'value1',
                name2: 'value2',
            });
        }, 5000);
    });
}

module.exports = {
    getData,
};