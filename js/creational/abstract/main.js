// bu asosan turli xildagi mahsulotlarni yaratish uchun ishlatiladi

// mebel sex

// Define the abstract Character class
class Character {
    constructor(name, health, attackPower, speed, abilities) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.speed = speed;
        this.abilities = abilities;
    }
}

// Define the abstract CharacterFactory class
class CharacterFactory {
    createCharacter(name) {
        throw new Error('createCharacter() method must be implemented');
    }
}

// Define concrete implementations of the CharacterFactory class
class HeroFactory extends CharacterFactory {
    createCharacter(name) {
        const health = 100;
        const attackPower = 50;
        const speed = 10;
        const abilities = ['heal', 'shield'];
        return new Character(name, health, attackPower, speed, abilities);
    }
}

class VillainFactory extends CharacterFactory {
    createCharacter(name) {
        const health = 150;
        const attackPower = 75;
        const speed = 8;
        const abilities = ['fireball', 'teleport'];
        return new Character(name, health, attackPower, speed, abilities);
    }
}

class MonsterFactory extends CharacterFactory {
    createCharacter(name) {
        const health = 200;
        const attackPower = 100;
        const speed = 5;
        const abilities = ['roar', 'stomp'];
        return new Character(name, health, attackPower, speed, abilities);
    }
}

// Example usage of the CharacterFactory classes
const heroFactory = new HeroFactory();
const hero = heroFactory.createCharacter('Hero');
console.log(hero);

const villainFactory = new VillainFactory();
const villain = villainFactory.createCharacter('Villain');
console.log(villain);

const monsterFactory = new MonsterFactory();
const monster = monsterFactory.createCharacter('Monster');
console.log(monster);

