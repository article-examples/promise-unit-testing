function basic (result) {
    if (!result) {
        return Promise.reject('Failure');
    }

    return new Promise((resolve, reject) => {
        // setTimeout(() => resolve(result), 2000);
        resolve(result);
    });
};

module.exports = {
    basic,
};
