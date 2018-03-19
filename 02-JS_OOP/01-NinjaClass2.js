function Ninja(name, health) {
    this.name = name;

    this.speed = 3;
    this.strength = 3;

    if (health == null) {
        this.health = 100;
    } else {
        this.health = health;
    }

    this.sayName = function() {
        console.log("My ninja name is "+this.name);
    }

    this.showStats = function() {
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength);
    }

    this.drinkSake = function() {
        this.health += 10;
        console.log("Ninja "+this.name+" is power up 10 Health");
    }

    this.punch = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name+" was punched by "+this.name+" and lost 5 Health!");
        }
    }

    this.kick = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 15;
            console.log(ninja.name+" was kicked by "+this.name+" and lost 15 Health!");
        }
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.showStats();
redNinja.showStats();
blueNinja.kick(redNinja);
blueNinja.showStats();
redNinja.showStats();