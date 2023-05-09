// mebel sex

// Bundan tashqari, dasturga yangi mahsulotlar yoki mahsulotlar oilalarini qo'shganda 
//mavjud kodni o'zgartirishni xohlamaysiz. Mebel sotuvchilari o'z kataloglarini tez-tez 
//yangilab turadilar va har safar bu sodir bo'lganda asosiy kodni o'zgartirishni xohlamaysiz.

// Sizga individual mebel ob'ektlarini yaratish usuli kerak, shunda ular bir oilaning boshqa 
//ob'ektlari bilan mos keladi. Mijozlar mos kelmaydigan mebellarni olganlarida juda g'azablanadilar.

// yechim
// har bir tur uchun bitta interface yaratib olish kerak 
// masalan stul uchun alohida, divanlar uchun alohida ...

// abstract classni o'zini ishlatib bo'lmaydi u yordamchi class
abstract class Furniture {
    abstract getType(): string;
    abstract getMaterial(): string;
    abstract getPrice(): number;
}

// endi o'rtada bitta abstract factory hosil qilishimiz kerak 
// chunki qaysi tur qaysiga aniqlash uchun


// Define the abstract FurnitureFactory class
abstract class FurnitureFactory {
    abstract createChair(): Furniture;
    abstract createTable(): Furniture;
}

// Define concrete implementations of the Furniture class
class ModernChair extends Furniture {
    getType() {
        return 'Modern Chair';
    }

    getMaterial() {
        return 'Metal and Leather';
    }

    getPrice() {
        return 200;
    }
}

class ModernTable extends Furniture {
    getType() {
        return 'Modern Table';
    }

    getMaterial() {
        return 'Glass and Metal';
    }

    getPrice() {
        return 400;
    }
}

class VictorianChair extends Furniture {
    getType() {
        return 'Victorian Chair';
    }

    getMaterial() {
        return 'Wood and Fabric';
    }

    getPrice() {
        return 300;
    }
}

class VictorianTable extends Furniture {
    getType() {
        return 'Victorian Table';
    }

    getMaterial() {
        return 'Wood and Marble';
    }

    getPrice() {
        return 600;
    }
}

// Define concrete implementations of the FurnitureFactory class
class ModernFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new ModernChair();
    }

    createTable() {
        return new ModernTable();
    }
}

class VictorianFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new VictorianChair();
    }

    createTable() {
        return new VictorianTable();
    }
}

// Example usage of the FurnitureFactory classes
const modernFurnitureFactory = new ModernFurnitureFactory();
const modernChair = modernFurnitureFactory.createChair();
const modernTable = modernFurnitureFactory.createTable();
console.log(modernChair.getType(), modernChair.getMaterial(), modernChair.getPrice());
console.log(modernTable.getType(), modernTable.getMaterial(), modernTable.getPrice());

const victorianFurnitureFactory = new VictorianFurnitureFactory();
const victorianChair = victorianFurnitureFactory.createChair();
const victorianTable = victorianFurnitureFactory.createTable();
console.log(victorianChair.getType(), victorianChair.getMaterial(), victorianChair.getPrice());
console.log(victorianTable.getType(), victorianTable.getMaterial(), victorianTable.getPrice());

