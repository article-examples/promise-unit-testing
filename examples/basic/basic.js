function basic (result) {
    if (!result) {
        return Promise.reject('Failure');
    }

    return new Promise((resolve, reject) => {
        // Assume that this below data is retrieved from Database which takes 1.6 seconds.
        setTimeout(() => resolve(result), 1600);
    });
};

module.exports = {
    basic,
};
