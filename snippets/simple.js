(function simple () {
    let serviceResponse = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Success'), 2000);
    });
    
    serviceResponse.then((msg) => {
        console.log(`Hello Message is ${msg}`);
    });
}());
