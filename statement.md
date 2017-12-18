# Tools Used for Promise Unit Testing

The `Promise` is an Object introduced in ECMA Script 2015 as part of 6th Edition. It represents the future completion of Success / Failure Operation. It mainly helps to works smoothly with asynchronous operations. Promises API is mainly followed `Promises/A+` Specification.

For Instance, You have submitted the email form / search form and waiting for the response. In that case, you will not be sure when server will respond and its tedius to get the actual message after that particular execution time for the response.

`Promise` is mainly used to fix this issue. Take a look at below snippet which uses promise code where it catches the success message after few seconds and you can increase time in `setTimeout` method as well but respond invokes whenever it resolves. In this example, We used `timeout` function to return after few seconds like server response. 

```javascript runnable
let serviceResponse = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), 2000);
});

serviceResponse.then((msg) => {
    console.log(`Hello Message is ${msg}`);
})

```

# Advanced usage

If you want a more complex example (external libraries, viewers...), use the [Advanced Node.js template](https://tech.io/select-repo/442)
