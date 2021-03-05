// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }   
    receiveDamage(damage){
        this.health -= damage;
    }
}
// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
            if (this.health > 0){
                return `${this.name} has received ${damage} points of damage`
            }
            return `${this.name} has died in act of combat`
    
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon  extends Soldier{
    receiveDamage(damage){
        super.receiveDamage(damage)
            if (this.health > 0){
                return `A Saxon has received ${damage} points of damage`
            }
            return `A Saxon has died in combat`
    
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let battle =  chosenSaxon.receiveDamage(chosenViking.strength);
        if ( chosenSaxon.health <= 0){
            var index = this.saxonArmy.indexOf(chosenSaxon);
            this.saxonArmy.splice(index, 1)
        }
        return battle;
    };

    saxonAttack(){
        let chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let battle =  chosenViking.receiveDamage(chosenSaxon.strength);
        if ( chosenViking.health <= 0){
            var index = this.vikingArmy.indexOf(chosenViking);
            this.vikingArmy.splice(index, 1)
        }
        return battle;
    };
    showStatus(){};
}
