// men logistika markaziga bordim va manashu mahsulotni yetkazib berish kerak dedim
// turi farqi yuq(samaliyot bo'lsin, mashina bo'lsin, keyma farqi yuq);

// muammolar qaysi deliverlar bo'sh ko'rish kerak 
const {Deliver, Transport, Product} = require("./product");

// bitta client uchun bitta buyurtma
const client1 = new Deliver(
    new Transport("car", "truc", "2012"), 
    new Product("olma", "100", "meva"),
)

const client2 = new Deliver(
    new Transport("mustang", "pilot", 123),
    new Product("Tarvuz", 5000, "meva")
)

console.log(client1.result());
console.log(client2.result());
