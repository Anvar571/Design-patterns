// men logistika markaziga bordim va manashu mahsulotni yetkazib berish kerak dedim
// turi farqi yuq(samaliyot bo'lsin, mashina bo'lsin, keyma farqi yuq);

// muammolar qaysi deliverlar bo'sh ko'rish kerak 

const {allTransports} =require("./avto");

class Product {
    constructor(name, price, type){
        this.name = name
        this.price = price
        this.type = type
    }

    getProduct(){
        return `This product Name: ${this.name} Price: ${this.price} Type: ${this.type}`
    }
}

class Transport {
    constructor(name, type, year){
        this.name = name
        this.type = type
        this.year = year

    }

    getOneTransportType(){
        if (this.type.length >= 3){
            const trans = allTransports.find(val => val.type == this.type );
            if (trans){
                return trans.getInformation()
            }else {
                return "Not found Transport!"
            }

        }else {
            return allTransports.map(val => val)
        }
    }
}

class Deliver {
    constructor(deliverType, product){
        this.deliverType = deliverType
        this.product = product
    }

    result(){
        return console.log(this.deliverType, this.product);
    }
}

const newTransport = new Transport("mers", "car", "312");

console.log(newTransport.getOneTransportType());

// const client1 = new Deliver(
//     new Transport("car", "truc", "2012"), 
//     new Product("olma", "100", "meva")
// )

// console.log(client1.result());