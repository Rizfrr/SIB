/* Make direct variable */
let pesan = "Hallo dengan let";
console.log(pesan);

/* 1 scope */
let discount = 500; //global scope
if (true) {
    let discount = 300; //local scope
    console.log(discount); //output : 300
}
console.log(discount); //output : 500
/* End Scope */

/* 2 Reassigned and Redeclared */
let nami; // declaration
console.log(nami);

nami = "Reza"; //assigned
console.log(nami); //output : Reza
nami = "Alfareza"; //Reassigned
console.log(nami); //output : Alfareza
// let nami = "Fahmi"; // error because let cannot be redeclare
// console.log(nami);
/* end Reassigned and Redeclared */

/* 3 Hoisting */
// lebih baik jangan
let message = "hello";
function greeting() {
    let message = "hello message";
    console.log(message);
}
greeting();
/* End Hoisting */
