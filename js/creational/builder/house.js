class House {
    constructor(builder) {
        this.foundation = builder.foundation;
        this.walls = builder.walls;
        this.roof = builder.roof;
        this.windows = builder.windows;
        this.doors = builder.doors;
    }

    describe() {
        console.log(`This house has ${this.foundation} foundation, ${this.walls} walls, ${this.roof} roof, ${this.windows} windows, and ${this.doors} doors.`);
    }
}

class HouseBuilder {
    constructor() {
        this.foundation = '';
        this.walls = '';
        this.roof = '';
        this.windows = '';
        this.doors = '';
    }

    setFoundation(foundation) {
        this.foundation = foundation
        return this
    }

    setWalls(walls) {
        this.walls = walls;
        return this;
    }

    setRoof(roof) {
        this.roof = roof;
        return this;
    }

    setWindows(windows) {
        this.windows = windows;
        return this;
    }

    setDoors(doors) {
        this.doors = doors;
        return this;
    }

    build() {
        return new House(this);
    }
}

const smallHouse = new HouseBuilder()
    .setFoundation('concrete')
    .setWalls('brick')
    .setRoof('shingles')
    .setWindows(4)
    .setDoors(1)
    .build();
smallHouse.describe(); // This house has concrete foundation, brick walls, shingles roof, 4 windows, and 1 doors.
