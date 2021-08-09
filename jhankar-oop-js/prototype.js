function Cat(name) {
    this.name = name;
}
Cat.prototype.talk = function () {
    console.log('maow maow');
}

const myCat = new Cat('Tiger');

console.log(myCat);

myCat.talk()