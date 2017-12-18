## What is Promise?
The `Promise` is an Object introduced in ECMA Script 2015 as part of 6th Edition. It represents the future completion of Success / Failure Operation. It mainly helps to works smoothly with asynchronous operations. Promise API is mainly followed `Promises/A+` Specification.

## Why we need Promise?
For Instance, You have submitted the email form / search form and waiting for the response. In that case, you will not be sure when server will respond and its bit hard to predict the time and get the actual message after that particular execution time for the response. `Promise` can help to fix this issue.

## Simple Promise
Take a look at below snippet which uses Promise API where it resolves the success message after two seconds and you can increase duration as well but console triggers whenever its get the message. In this example, We used `setTimeout` function to return after two seconds like server response. 

@[Simple Promises Code Example]({"stubs":["simple.js"], "command":"node simple.js", "project":"snippets"})

Lets have a look at the Tools what we use to do Promise Unit Testing as next step.

# Note to Begineers

Are you still wanted to learn more Basics about Promise. Below articles gives you better picture
- [JavaScript promises, mastering the asynchronous](https://tech.io/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript)  
- [JS Promise (Part 1 - Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)