class Tiger{
    #speed = 100;
    location = 'sondarban'
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`I am ${this.name}. I am runing at ${this.#speed} mph. I live in ${this.location}`);
    }
}

const royal = new Tiger('Royal Bengle');
console.log(royal)
royal.location = 'Borishal';
royal.run()