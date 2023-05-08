
class CreateTransport {
    constructor(name, year){
        this.name = name
        this.isDeliver = false
        this.type = "creator"

        this.#isDelivred();
    }

    #isDelivred(){
        if (!this.isDeliver){
            this.isDeliver = true 
        }else {
            return console.log("Bu avbomobil Band");
        }
    }

    getInformation(){
        return `This Transport name ${this.name} type ${this.type} isDelivered ${this.isDeliver}`
    }

    getType(){
        return `This Transport Type ${this.type}`
    }
}

class Car extends CreateTransport {
    constructor(name, year){
        super(name, year);
        this.type = "car"
    }
}

class Pilot extends CreateTransport {
    constructor(name, year){
        super(name, year);
        this.type = "pilot"
    }
}

class Truc extends CreateTransport {
    constructor(name, year){
        super(name, year)
        this.type = "truc"
    }
}

const allTransports = [
    new Car("mers", "2001"), 
    new Truc("Truc"), 
    new Pilot("airwais", "2017")
]

module.exports ={
    allTransports
}