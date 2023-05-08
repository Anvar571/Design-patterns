const {allTransports} = require("./avto");

class Product {
    constructor(name, price, type){
        this.name = name
        this.price = price
        this.type = type
    }

    getProductInfo(){
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
        return this.deliverType.getOneTransportType() + "\n" + this.product.getProductInfo();
    }
}

module.exports = {Deliver, Transport, Product}