function hasDuplicates(arr) {
    // mengembalikan true jika menemukan data duplikat dan false jika sebaliknya
    
    let check;
    let newArr = [];
    for (let item of arr) {
        check = newArr.find((i) => i == item);
        if (check) return true;
        newArr.push(item)
    }
    return false;
}

console.log(hasDuplicates([1, 2, 3, 4, 5]));
console.log(hasDuplicates([1, 2, 3, 4, 1]));
