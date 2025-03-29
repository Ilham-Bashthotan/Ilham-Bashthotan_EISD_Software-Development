function combine(prefix, remaining, maxLength, results) {
    // I.S. terdefinisi remaining adalah array dan maxLength sebagai batas maksimum banyaknya remaining diambil
    // F.S. results ditambahkan oleh prefix dengan algoritma recursive
    
    // base case
    if (prefix.length > 0) {
        results.add(prefix);
    }
    // recursive
    if (prefix.length < maxLength) {
        remaining.forEach((val, i) => {
            combine(prefix + val, remaining.slice(i + 1), maxLength, results);
        });
    }
}

function getCombinations(str, maxLength) {
    // mengembalikan nilai dari prosedur combine() dengan str yang diolah
    // menjadi tanpa spasi dan huruf kecil juga memiliki batas maxLength 
    results = new Set();
    let arr;
    
    arr = str.replace(" ", "").toLowerCase().split("");
    combine("", arr, maxLength, results);
    return [...results];
}

let combinations = getCombinations("Naip Lovyu", 6);
console.log("jumlah kombinasi", combinations.length);
console.log("Kombinasi yang mungkin:", combinations);
