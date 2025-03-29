function findBrat(children) {
    // mengembalikan nilai array dimana di dalam array terdapat object berisi 
    // name dan count. array sudah terurut berdasarkan nilai count
    let countChild = [];
    let result = [];
    let tempChild;

    for (let i = 0; i < children.length; i++) {
        tempChild = countChild.find(child => child.name === children[i])
        if (!tempChild) {
            countChild.push({ name: children[i], count: 1 });
        } else {
            tempChild.count++;
        }
        countChild.sort((a, b) => b.count - a.count);
    }
    if (countChild[0].count > 1) {
        result[0] = countChild[0].name
        i = 1
        while (i < countChild.length && countChild[i].count == countChild[i - 1].count) {
            result.push(countChild[i].name);
            i++;
        }
    }
    return result;
}

function sayNaughtyChildren(children) {
    // mengembalikan nilai string yang berasal dari array children 
    // menggunakan function findBrat()
    let bard = findBrat(children);
    let text = "";
    let i;
    if (bard.length == 0) {
        text = "Semuanya anak baik";
    } else {
        for (i = 0; i < bard.length; i++) {
            text += bard[i];
            if (i <= bard.length - 2) {
                text += " dan ";
            }
        }
        text += " Nackal";
    }
    return text;
} 

let data1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
let data2 = [ "Bagas", "Dimas", "Fajar", "Bagas",  "Indra", "Gilang", "Gilang", "Bagas",  "Fajar", "Fajar"]
let data3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"]
console.log(sayNaughtyChildren(data1));
console.log(sayNaughtyChildren(data2));
console.log(sayNaughtyChildren(data3));
