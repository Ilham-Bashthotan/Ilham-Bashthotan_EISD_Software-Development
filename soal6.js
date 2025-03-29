let menu = {
    "Ayam Goreng Krispi": { type: "Makanan", price: 15000 },
    "Ayam Puk Puk": { type: "Makanan", price: 13000 },
    "Ayam Bakar": { type: "Makanan", price: 20000 },
    "Es Teh": { type: "Minuman", price: 5000 },
    "Es Jeruk": { type: "Minuman", price: 7000 }
};

let taxRates = { makanan: 0.05, minuman: 0.03, transaksi: 0.15 };

function calculateTotal(order) {
    // mengembslikan nilai total dari order berdasarkan taxRates
    // yang telah ditentukan
    let subtotal = 0;
    
    for (let item in order) {
        let quantity = order[item];
        let { type, price } = menu[item];
        let itemTax = type === "Makanan"
            ? taxRates.makanan
            : taxRates.minuman;
        subtotal += (price + price * itemTax) * quantity;
    }
    
    let totalWithTransactionTax = subtotal + subtotal * taxRates.transaksi;
    return totalWithTransactionTax;
}

let orders = {
    "Rehan Whangsap": {
        "Ayam Bakar": 2,
        "Es Teh": 1
    },
    "Amba Roni": {
        "Ayam Puk Puk": 1,
        "Es Teh": 3
    },
    "Faiz Ngawi": {
        "Ayam Goreng Krispi": 1,
        "Ayam Puk Puk": 1,
        "Ayam Bakar": 1,
        "Es Teh": 1,
        "Es Jeruk": 1
    }
};

for (let person in orders) {
    let total = calculateTotal(orders[person]);
    console.log(`${person} harus membayar: Rp ${total}`);
}
