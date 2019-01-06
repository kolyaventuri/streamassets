# StringFormatter

Common library to handle drop in string replacement.

## Usage
```js
import StringFormatter from './';

const strings = {
  greeting: 'Hello, {name}!'
};

const {getString} = new StringFormatter(strings);

// Without drop in
console.log(getString('greeting')); // "Hello, {name}!"

// With drop in
console.log(getString('greeting', { name: 'John' })); // "Hello, John!"
```
