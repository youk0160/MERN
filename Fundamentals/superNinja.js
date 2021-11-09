class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 210
        this.speed = 10;
        this.strength = 10;
    }
    
    sayName() { console.log(this.name);}
    showStats() {console.log("Name: " + this.name + ", Health:" + this.health + ", Speed:" + this.speed + ", Strength: " + this.strength);}
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom=10;
    }
    speakWisdom() {console.log("What one programmer can do in one month, two programmers can do in two months.")}

}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
