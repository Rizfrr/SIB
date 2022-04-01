// import core module
const os = require("os");
const fs = require("fs");

// * Check free RAM
console.log("free memory: " + os.freemem());

// import local module
const { luasSegitiga, kllSegitiga } = require("./segitiga");

// * Local Module
console.log("luas segitiga = ", luasSegitiga(9, 2));
console.log("keliling segitiga = ", kllSegitiga(9));

//! using fs module
// * Read file
const isi = fs.readFileSync("text.txt", "utf-8");
console.log(isi);
// * Write file
fs.writeFileSync("text.txt", "I LOVE ME");

// Make JSON file
const createPerson = function (person) {
  fs.writeFileSync("person.json", JSON.stringify(person));
};

const rizal = createPerson({
  name: "Rizal",
  age: 20,
  address: "Kebumen",
});

//* Read JSON file
const person = JSON.parse(fs.readFileSync("person.json", "utf-8"));
console.log(person.address);
