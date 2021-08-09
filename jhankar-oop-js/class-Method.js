class Hero {
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        if(this.power){
            return this.power;
        }
        return 'I have no Power';
    }
    goForGrocery(budget){
        if(this.power && budget > 1000){
            console.log(this.getPower())
        }
        return 'price is too high, I can not buy';
    }
}
const catMan = new Hero('Catman', 'khamsi');
console.log(catMan);
console.log(catMan.getPower());
console.log(catMan.goForGrocery(5000));