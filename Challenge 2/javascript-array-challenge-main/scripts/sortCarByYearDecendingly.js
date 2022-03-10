function sortCarByYearDescendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];

    // Tulis code-mu disini

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (j != result.length - 1) {
                if (result[j].year < result[j + 1].year) {
                    let temp = result[j];
                    result[j] = result[j + 1];
                    result[j + 1] = temp;
                }
            }
        }
    }

    // function years(a, b) {
    //     if (a.year > b.year) {
    //         return -1;
    //     }
    //     if (a.year < b.year) {
    //         return 1;
    //     }
    //     return 0;
    // }
    // result.sort(years);

    console.log(result);

    // Rubah code ini dengan array hasil sorting secara descending
    return result;
}
