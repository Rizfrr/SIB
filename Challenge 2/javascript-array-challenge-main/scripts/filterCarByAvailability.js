function filterCarByAvailability(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Tempat penampungan hasil
    const result = [];

    // Tulis code-mu disini

    for (let i = 0; i <= cars.length - 1; i++) {
        if (cars[i].available) {
            let index = result.length;
            result[index] = cars[i];
        }
    }
    console.log(result);

    // let i = 0;
    // function filterByAvailable(item) {
    //     if (item.available === true) {
    //         return true;
    //     }
    //     i++;
    //     return false;
    // }

    // let arrByAvailable = cars.filter(filterByAvailable);
    // console.log("Filtered Array\n", arrByAvailable);

    // Rubah code ini dengan array hasil filter berdasarkan availablity
    return result;
}
