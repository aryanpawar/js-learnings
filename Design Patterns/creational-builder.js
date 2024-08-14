// We declare our objects
const bug1 = {
  name: "Zural",
  phrase: "Kaala Hit Can't Defeat Me!",
};

const bug2 = {
  name: "Daas",
  phrase: "Laal Hit Can't Defeat Me!",
};

// These functions take an object as parameter and add a method to them
const addFlyingAbility = (obj) => {
  obj.fly = () => console.log(`Now ${obj.name} can fly!`);
};

const addSpeechAbility = (obj) => {
  obj.saySmthg = () => console.log(`${obj.phrase}`);
};

// Finally we call the builder functions passing the objects as parameters
addFlyingAbility(bug1);
bug1.fly(); // output: "Now Buggy McFly can fly!"

addSpeechAbility(bug2);
bug2.saySmthg(); // output: "Martiniano Buggland walks the walk and talks the talk!"
