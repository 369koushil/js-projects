# Day 16

## LocalStorage and SessionStorage

### SessionStorage

SessionStorage allows you to store data for the duration of the page session. The data is only available as long as the page is open, and it gets cleared when the page or tab is closed.

### LocalStorage

LocalStorage allows you to store data with no expiration time. The data persists even after the browser is closed and can be accessed whenever the site is loaded again.

## Main Methods
### `getItem(key)`
### `setItem(key, value)`
### `key(index)`
### `removeItem(key)`
### `clear()`
### `length`


## Serializable and Non-Serializable Objects in JavaScript

### Serializable Objects

A serializable object in JavaScript is one that can be converted into a JSON string using `JSON.stringify()` and then back into an object using `JSON.parse()`. Serializable objects typically consist of simple data types like strings, numbers, arrays, and objects that do not contain functions, `undefined`, or circular references.

### Non-Serializable Objects

A non-serializable object contains data or structures that cannot be converted directly to JSON using `JSON.stringify()`. This includes objects with functions, `undefined`, or circular references. Such objects may lose information during serialization or cause errors.
