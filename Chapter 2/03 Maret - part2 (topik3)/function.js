const x = 1;
const y = 2;
const z = 3;

function apkahGenap(angka) {
    if (angka % 2 == 0) {
        console.log(angka + " itu genap");
    } else {
        console.log(angka, " itu ganjil");
    }
}

apkahGenap(x);
apkahGenap(y);
apkahGenap(z);

/*
function keyword
 */
function luasSegiempat(sisi) {
    return sisi * sisi;
}
const luasPanjangSisi4 = luasSegiempat(4);
console.log("luas segi4 dengan sisi 4 adalah " + luasPanjangSisi4);

/*
function keyword tapi anonim
 */
const hitungLuasSegi4 = function (sisi) {
    return sisi * sisi;
};
const hitungLuasSegiempat = hitungLuasSegi4(8);
console.log("luas segi4 dengan sisi 8 adalah " + hitungLuasSegiempat);

/*

*/
