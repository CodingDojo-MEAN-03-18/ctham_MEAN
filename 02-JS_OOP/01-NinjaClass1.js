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
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();