class SmartDevice{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('I am eating ELectrons')
    }

}

class Phone extends SmartDevice{
    constructor(name, price, camera){
        super(name,price);
        this.camera = camera;
    }
    
}

class Watch extends SmartDevice{
    constructor(name, price, distance){
        super(name, price)
        this.distance = distance;
    }
}


class Tablet extends SmartDevice{
    constructor(name, price, isWifi){
        super(name, price)
        this.isWifi = isWifi;
    }
}

const samsung = new Phone('Samsung', 6000, '32GB');
console.log(samsung);

const watch = new Watch('casio', 500, '1km');
console.log(watch);

const ipad = new Tablet('Apple', 55555, true);

console.log(ipad);