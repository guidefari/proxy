// #2 - Predictable failure example
const targetObject = {
  someProp: 1
}

const failHandler = {
  get: function(target, key) {
      return key in target ? 
      target[key] : 
      'Doesnt exist!';
  }
}

const failureExample = new Proxy(targetObject, failHandler);

console.log(failureExample.someProp) // 1
console.log(failureExample.someOtherProp) // Doesn't exist!

console.log(targetObject.someOtherProp) // undefined