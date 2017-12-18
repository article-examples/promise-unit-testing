# Introduction

## What is Promise?
The `Promise` is an Object introduced in ECMA Script 2015 as part of 6th Edition. It represents the future completion of Success / Failure Operation. It mainly helps to works smoothly with asynchronous operations. Promise API is mainly followed `Promises/A+` Specification.

## Why we need Promise?
For Instance, You have submitted the email form / search form and waiting for the response. In that case, you will not be sure when server will respond and its bit hard to predict the time and get the actual message after that particular execution time for the response. `Promise` can help to fix this issue.

## Simple Promise
Take a look at below snippet which uses Promise API where it catches the success message after few seconds and you can increase time in `setTimeout` method as well but console triggers whenever its get the message. In this example, We used `timeout` function to return after few seconds like server response. 

Click here to Read More about [Promise Unit Testing](https://tech.io/my-playgrounds/11107)