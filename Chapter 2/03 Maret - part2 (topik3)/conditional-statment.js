const gebetan = {
    name: "Raffi",
    isOnline: true,
};

if (gebetan.isOnline) {
    console.log(`Haloo, ${gebetan.name}!`);
    // console.log("Halo," + gebetan.name + "!");
    console.log("Lagi ngapain nih");
}

const gebetanArif = {
    name: "Arif",
    isOnline: true,
    blocked: true,
};

if (gebetanArif.isOnline && !gebetanArif.blocked) {
    console.log(`Haloo, ${gebetanArif.name}!`);
    console.log("Lagi ngapain?");
} else {
    console.log("aku pengen ngomong");
    console.log("tapi aku di blok");
}
