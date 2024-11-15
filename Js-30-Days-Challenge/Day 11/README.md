# Day 11

## Asynchronous Programming

### Async and Await
- Simplifies working with promises.
- `async` function always returns a promise.
- `await` keyword is used to wait for a promise to resolve.

### Creation of Promises
- Promises represent a value that may be available now, or in the future, or never.
- Important methods:
  - `Promise.all()`: Resolves all promises to it as an array.
  - `Promise.race()`: Resolves or rejects as soon as one of the promises in the array settles (first resolved or rejected), ignoring the rest.
  - `.then()`: Executes after the promise is resolved.
  - `.catch()`: Executes if the promise is rejected.
  - `.finally()`: Executes after the promise is settled, regardless of its outcome.


