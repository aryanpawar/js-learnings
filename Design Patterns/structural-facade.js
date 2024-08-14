const Mortgage = function (name) {
  this.name = name;
};

Mortgage.prototype = {
  applyFor: function (amount) {
    // access multiple subsystems...
    let result = "approved";
    if (!new Bank().verify(this.name, amount)) {
      result = "denied";
    } else if (!new Credit().get(this.name)) {
      result = "denied";
    } else if (!new Background().check(this.name)) {
      result = "denied";
    }
    return this.name + " has been " + result + " for a " + amount + " mortgage";
  },
};

const Bank = function () {
  this.verify = function (name, amount) {
    // complex logic ...
    return true;
  };
};

const Credit = function () {
  this.get = function (name) {
    // complex logic ...
    return true;
  };
};

const Background = function () {
  this.check = function (name) {
    // complex logic ...
    return true;
  };
};

function run() {
  const mortgage = new Mortgage("Honey Singh");
  const result = mortgage.applyFor("$100,000");

  console.log(result);
}

run();
