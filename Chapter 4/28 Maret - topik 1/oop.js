class human {
  // Static property
  static isLivingOnEarth = true;

  // * Constructor
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  // * Instance method
  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// Add instance method to the prototype
human.prototype.greet = function (name) {
  console.log(`Hi ${name}, I'm ${this.name}`);
};

// Add static method
human.destroy = function (thing) {
  console.log(`Human is destroying ${thing}`);
};

// * Instatiation of Human
let fajar = new human("Fajar", "Madiun");
console.log(fajar); // todo Output : human {name : 'Fajar', address : 'Madiun'}

// * Checking if the instance is an instance of Human
