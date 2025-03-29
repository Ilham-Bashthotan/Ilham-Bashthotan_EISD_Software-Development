const products = [
    { name: "TV", category: "elektronik", price: 1000 },
    { name: "headphone", category: "elektronik", price: 200 },
    { name: "baju", category: "fashion", price: 50 },
    { name: "gitar", category: "musik", price: 300 },
    { name: "sepatu", category: "olahraga", price: 80 },
    { name: "kamera", category: "elektronik", price: 600 }
];

const customers = [
    { name: "Rina", interests: ["elektronik", "musik"], purchases: ["TV", "headphone"] },
    { name: "Budi", interests: ["fashion", "musik"], purchases: ["baju", "gitar"] },
    { name: "Hartono", interests: ["olahraga", "elektronik"], purchases: ["sepatu", "kamera"] }
];

function recommendProducts(customerName) {
    // mengembalikan rekomendasi produk berdasarkan data customers 
    // dimana rekomendasi diambil dari interests yang dimiliki oleh customerName
    const customer = customers.find(customer => customer.name === customerName);
    let recommend = [];
    
    if (!customer) return [];
    
    // menambahkan 
    recommend.push(...products
        .filter(product => customer.interests.includes(product.category))
        .map(product => product.name));
    return Array.from(recommend);
}

console.log("Rekomendasi untuk Rina:", recommendProducts("Rina"));
console.log("Rekomendasi untuk Budi:", recommendProducts("Budi"));
console.log("Rekomendasi untuk Hartono:", recommendProducts("Hartono"));