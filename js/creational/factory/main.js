// men logistika markaziga bordim va manashu mahsulotni yetkazib berish kerak dedim
// turi farqi yuq(samaliyot bo'lsin, mashina bo'lsin, keyma farqi yuq);

// muammolar qaysi deliverlar bo'sh ko'rish kerak 
const {Deliver, Transport, Product} = require("./product");

// bitta client uchun bitta buyurtma
const client1 = new Deliver(
    new Transport("car", "truc", "2012"), 
    new Product("olma", "100", "meva"),
    new Product("xurmo", "100", "meva")
)

console.log(client1.result());