function changeMoney(payment, total) {
    // mengembalikan object yang berisi {denom: count} yang dimana denom adalah uang pecahan
    // dan count adalah banyaknya uang pecahan yamg harus di keluarkan berdasarkan selisih dari 
    // payment dan total
    let change = payment - total;
    let denominations = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let changeBreakdown = {};

    for (let denom of denominations) {
        if (change >= denom) {
            let count = Math.floor(change / denom);
            changeBreakdown[denom] = count;
            change -= count * denom;
        }
    }

    return changeBreakdown;
}
console.log(changeMoney(10000, 7500));
console.log(changeMoney(5000, 1100));
console.log(changeMoney(178000, 90500));
