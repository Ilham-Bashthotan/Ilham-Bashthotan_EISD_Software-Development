function findCakeThief(guests, behaviors, lastSeeCake) {
    // I.S. guests adalah array tamu yang memiliki Object behaviors,
    //      lastSeeCake adalah string orang yang terakhir melihat kue
    // F.S. menampilkan urutan peristiwa kejadian dan menampilkan siapa pencurinya
    //      berdasarkan orang lastSeeCake melihat kue tersebut.
    let isCakeStillThere;
    let thief;

    isCakeStillThere = true;
    guests.forEach((guest, i) => {
        console.log(guest, behaviors[guest]);
        if (isCakeStillThere) {
            if (guest === lastSeeCake && i != guests.length - 1) {
                isCakeStillThere = false;
                thief = guests[i + 1];
                console.log("Terakir kue terlihat")
            } 
            console.log("Tidak ada indikasi pencurian");
        } else if (thief != null) {
            console.log(thief, "adalah orang yang paling mungkin mengambil kue tersebut.");
        } else {
            console.log("Pencuri tidak dapat ditentukan.")
        }
    });
}

let guests = ["Ningguang", "Hutao", "Xiao", "Childe"];
let behaviors = {
    "Ningguang": "selalu memeriksa kue sebelum memberikan kado",
    "Hutao": "langsung memberikan kado tanpa memperhatikan kue",
    "Xiao": "memiliki kebiasaan memotret apa pun yang dia lihat pertama kali di ruangan",
    "Childe": "selalu membawa air mineral dan meletakkannya di meja sebelum memberikan kado"
};
let lastSeeCake = "Xiao";

findCakeThief(guests, behaviors, lastSeeCake)