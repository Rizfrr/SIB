// variabel
const name = "saya";

/*
ini untuk komen lebih dari satu baris
*/
console.log(name);

// var declaration in advance
var hasil;
hasil = 100;

// var declaration and assignment
var hasil = 100;

/* 1 scope */
var angka = 200; //global scope
if (true) {
    var angka = 150; //global scope
}
console.log(angka);
// output 150 karena angka global scope

/* Sebelum ada ES6, solusi membuat
function scope -> local scope */
var diskon = 500; //global scope
function diskonScope() {
    var diskon = 300; //local scope
    console.log(diskon);
}
diskonScope();
console.log(diskon);
/* End Scope */

/* 2 Reassigned and Redeclared */
var nama; //declare
console.log(nama); //output:undefined

nama = "Bot"; //assignment
console.log(nama); // ouput : Bot

var nama = "Rizal FR"; //Reassigned
console.log(nama); //output : Rizal FR
/* End Reassigned and Redeclared */

/* 3 Hoisting */
nama = "Mentor Reza";
var nama;
console.log(nama);

// Background execution
var nama;
nama = "Mentor Reza";
console.log(nama);

/* End Hoisting */
