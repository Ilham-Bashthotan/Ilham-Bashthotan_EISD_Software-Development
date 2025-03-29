function isLetter(char) {
    // mengembalikan true jika char merupakan huruf dan false jika sebaliknhya
    let code = char.toLowerCase().charCodeAt(0);
    return ('a'.charCodeAt(0) <= code && code <= 'z'.charCodeAt(0));
}

function decryptCaesarCipher(txt, shift = 5) {
    // mengembalikan tulisan dari string txt yang telah bergeser sebanyk shift
    let decryptedText = "";
    let charCode;
    txt.toLowerCase();
    for (let char of txt) {
        if (isLetter(char)) {
            charCode = char.charCodeAt(0) - shift;
            charCode = charCode < 'a'.charCodeAt(0) ? charCode + ('z'.charCodeAt(0) - 'a'.charCodeAt(0)) + 1 : charCode;
            decryptedText += String.fromCharCode(charCode);
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}

console.log("Hasil dekripsi:", decryptCaesarCipher("xfqfr bfmdz"));
console.log("Hasil dekripsi:", decryptCaesarCipher("gjxtp lzj rfz ifkyfw jxi snm"));
console.log("Hasil dekripsi:", decryptCaesarCipher("gwt, gjxtp qz rfz rfpfs in bfwlty lfp?"));
console.log("Hasil dekripsi:", decryptCaesarCipher("fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz"));
console.log("Hasil dekripsi:", decryptCaesarCipher("dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu"));
