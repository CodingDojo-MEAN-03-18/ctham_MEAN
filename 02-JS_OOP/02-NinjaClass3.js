class Ninja {
    constructor(name, health) {
        this.name = name;

        if (health == null) {
            this.health = 100;
        } else {
            this.health = health;
        }

        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("My ninja name is "+this.name);
    }

    showStats() {
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log("Ninja "+this.name+" is power up 10 Health");
    }
}

const ninja1 = new Ninja("Hyabusa1");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
const ninja2 = new Ninja("Hyabusa2",50);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();

console.log('*******************')

class Sensei extends Ninja {
    constructor(name, health) {
        super(name);

        if (health == null) {
            this.health = 200;
        } else {
            this.health = health;
        }

        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
    }
}

const superSensei1 = new Sensei("Master Splinter 1");
superSensei1.showStats();
superSensei1.speakWisdom();
superSensei1.showStats();
const superSensei2 = new Sensei("Master Splinter 2",75);
superSensei2.showStats();
superSensei2.speakWisdom();
superSensei2.showStats();