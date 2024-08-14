// Prototype Pattern

// Prototype is a creational design pattern that allows cloning objects, even complex ones, without coupling to their specific classes.

// By using the prototype chain, we can avoid duplicating methods and properties, which saves memory by allowing us to access properties that aren't directly defined on the object itself.

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("Bhoo Bhoo!");
  }
}

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name} Flying!`);
  }
}

const superDog1 = new SuperDog("Robin");
superDog1.bark();
superDog1.fly();

// ----------- Another Example -------------

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding methods to the prototype
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

Person.prototype.haveBirthday = function () {
  this.age += 1;
  return `Happy Birthday! You are now ${this.age} years old.`;
};

// Creating instances
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Using methods from the prototype
console.log(person1);
console.log(person2);

console.log(person1.greet());
console.log(person1.haveBirthday());

console.log(person2.greet());
console.log(person2.haveBirthday());

// ---------------------------------------------------------------

/*
Advantages:
Efficient Object Creation: Objects can be created by copying existing ones, saving time and memory.
Dynamic Updates: Changes made to a prototype are reflected in all instances, allowing for dynamic updates.
Code Reusability: Multiple objects can share the same prototype, reducing code duplication.
Easy Object Initialization: Objects can be initialized without specifying all properties and methods during creation.
Structured Development: Encourages a structured approach to object creation and inheritance, promoting best coding practices.

Disadvantages:
Complexity: Managing and updating prototypes and their relationships can become complex as the application grows.
Confusion: If not implemented carefully, it can lead to confusion and unintended consequences when modifying prototypes.
Potential for Overwriting: Modifying the prototype can unintentionally affect all instances, causing unexpected behaviour.
Performance Overhead: Cloning objects from prototypes can introduce some performance overhead, especially when dealing with deeply nested structures.
Limited Privacy: Prototypes do not provide the same level of data encapsulation and privacy as some other design patterns, potentially exposing object properties and methods unintentionally.
*/
