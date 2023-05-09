// builder pattern

class Burger {
    constructor(builder) {
        this.size = builder.size;
        this.cheese = builder.cheese || false;
        this.pepperoni = builder.pepperoni || false;
        this.lettuce = builder.lettuce || false;
        this.tomato = builder.tomato || false;
    }

    describe() {
        console.log(`This is a ${this.size} burger with the following toppings: 
        ${this.cheese ? 'cheese' : ''} 
        ${this.pepperoni ? 'pepperoni' : ''} 
        ${this.lettuce ? 'lettuce' : ''} 
        ${this.tomato ? 'tomato' : ''}`);
    }
}

class BurgerBuilder {
    constructor(size) {
        this.size = size;
    }

    addCheese() {
        this.cheese = true;
        return this;
    }

    addPepperoni() {
        this.pepperoni = true;
        return this;
    }

    addLettuce() {
        this.lettuce = true;
        return this;
    }

    addTomato() {
        this.tomato = true;
        return this;
    }

    build() {
        return new Burger(this);
    }
}

const burger = new BurgerBuilder('large')
    .addCheese()
    .addPepperoni()
    .addLettuce()
    .build();

burger.describe(); // This is a large burger with the following toppings: cheese pepperoni lettuce

