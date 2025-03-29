function isPalindrome(text) {
    // mengembalikan "eureeka!" jika text palindrom,
    // selain itu mengembalikan "suka blyat"
    let cleanedText;
    let reversedText;

    cleanedText = text.toLowerCase();
    reversedText = cleanedText.split('').reverse().join('');
    
    if (cleanedText === reversedText) return "eureeka!";
    return "suka blyat";
}

console.log(isPalindrome("Angsa"));
console.log(isPalindrome("KataK"));
console.log(isPalindrome("kasur empuk"));
console.log(isPalindrome("Aku Suka Kamu"));
console.log(isPalindrome("Ibu Ratna antar ubi"));
