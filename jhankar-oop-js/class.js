class PenDrive{
    constructor(capacity, color, price){
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const ignite = new PenDrive('32GB', 'White', '900');
console.log(ignite);

const oakwood = new PenDrive('4GB', 'black')
console.log(oakwood);


/* functional object */
function StickyNote (color, price){
    this.color = color;
    this.price = price;
}

const yellow = new StickyNote('yellow', 50);

console.log(yellow);