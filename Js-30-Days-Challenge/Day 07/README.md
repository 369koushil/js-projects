## Day 7 in JS Challenge

### Objects

- **Creation of Objects**
  - **Using Object Literal Syntax**
    ```javascript
    const obj = {
      key1: value1,
      key2: value2
    };
    ```

  - **Using Constructor**
    ```javascript
    const obj = new Object();
    obj.key1 = value1;
    obj.key2 = value2;
    ```

- **Object Methods**
  - `Object.keys(obj)` - Returns an array of the object's own enumerable property names (keys).
  - `Object.values(obj)` - Returns an array of the object's own enumerable property values.
  - `Object.entries(obj)` - Returns an array of the object's own enumerable property `[key, value]` pairs.
  - `Object.freeze(obj)` - Prevents modification of properties of the object (makes it immutable).
  - `Object.defineProperty(obj, property, descriptor)` - Adds or modifies a property on the object.

### The `this` Keyword

- **Definition**
  - The `this` keyword refers to the current object in context.

- **Behavior in Nested Functions**
  - In a nested function within an object method, `this` in the outer function refers to the object, while `this` in the inner function refers to the global object (or `undefined` in strict mode).

  ```javascript
  const obj = {
    outer: function() {
      console.log(this); // Refers to obj
      function inner() {
        console.log(this); // Refers to global object or undefined in strict mode
      }
      inner();
    }
  };

  obj.outer();
