const bumi = "bulat";
const aku = "rizal";
const pi = 3.14;
const WARNA_MERAH = "#F00";
const WARNA_BIRU = "#00F";

console.log(bumi);
const warnaBaju = WARNA_BIRU;
console.log(warnaBaju);

/* 1 SCOPE Start*/
const disk = 500;
if (true) {
    const disk = 300; //hanya bisa diakses didalam scope
    console.log(disk); //output:300
}
console.log(disk); //output:500
/* SCOPE END */

/* CONST tidak bisa reassigned dan redeclared */
