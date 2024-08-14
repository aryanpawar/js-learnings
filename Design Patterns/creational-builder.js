const kida1 = {
  name: "Zural",
  phrase: "Kaala Hit Can't Defeat Me!",
};

const kida2 = {
  name: "Daas",
  phrase: "Laal Hit Can't Defeat Me!",
};

const addFlyingAbility = (obj) => {
  obj.fly = () => console.log(`Now ${obj.name} can fly!`);
};

const addSpeechAbility = (obj) => {
  obj.saySmthg = () => console.log(`${obj.phrase}`);
};

addFlyingAbility(kida1);
kida1.fly();

addSpeechAbility(kida2);
kida2.saySmthg();

// -----------------------------------------------------------

// ******* Without Builder Pattern *******

// class Address {
//   constructor(zip, street) {
//     this.zip = zip;
//     this.street = street;
//   }
// }

// class User {
//   constructor(name, age, phone, address) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.address = address;
//   }
// }

// const user = new User(
//   "Bob",
//   undefined,
//   undefined,
//   new Address("12345", "Main St.")
// );

// ******* With Builder Pattern *******

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const builder = new UserBuilder("Bob");
const user1 = builder
  .setPhone("123")
  .setAddress(new Address("12345", "Main St."))
  .build();
console.log(user1);

// -----------------------------------------------------------

// Modern JS Approach
class MAddress {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class MUser {
  constructor(name, { age, phone = "123-456-7890", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new MUser("Bob", { address: new MAddress("12345", "Main St.") });
console.log(user);
