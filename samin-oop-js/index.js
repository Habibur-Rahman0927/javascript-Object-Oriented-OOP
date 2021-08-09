console.log("Hello World");

function Person(firstName, lastName) {
    // consttructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        console.log(`${this.firstName} && ${this.lastName}`);
    }
    console.log(this);
}
const habib = new Person('Habibur', 'Rahman');
const Rocky = new Person('Hi, this is ', 'Rocky');
habib.fullName();
Rocky.fullName();
// console.log(Person);

console.dir(Person);



Person.prototype.fullNameProto = function () {
    console.log(`${this.firstName} ${this.lastName} with prototype`);
}


habib.fullNameProto();

Person.prototype === habib.__proto__;


function Profession(firstName, lastName, profession) {
    Person.call(this, firstName, lastName);
    this.profession = profession;
}

console.dir(Profession);
const inherite = new Profession('Rasel', 'hasan', 'Web developer');
console.log(inherite);


Profession.prototype.fullNameProtoWithProf = function () {
    console.log(`${this.firstName} && ${this.lastName} && ${this.profession} with prototype`);
}

inherite.fullNameProtoWithProf();

console.log(Profession.prototype.__proto__ = Person.prototype);
console.log(Profession.prototype.__proto__ == Person.prototype);



/* objcet */

const myObj = {
    firstName: 'Habib'
};

console.log(myObj);


const myObj1 = Object.create(
    {},
    {
        firstName: {
            value: "Aslamkhan"
        },
        lastName: {
            value: 'RockStar'
        }
    });
console.log(myObj1);






const Person1 = {
    firstName: 'Habib',
    lastName: 'Rasel',
    init: function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        return this;
    },
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}


const Profession1 = Object.create(Person1, {
    profession: {
        value: 'Web developer'
    },
    firstName: {
        value: 'Rajib'
    },
    lastName: {
        value: 'chow'
    },
    fullNameProf: {
        value: function () {
            console.log(`${this.firstName} ${this.lastName}`);
        }
    }
});

const myObj2 = Object.create(Profession1);
console.log(myObj2);



myObj2.obj = 'Object'
console.log(myObj2.profession)
console.log(myObj2.firstName)


Person1.init('Rocky', 'Bok');

myObj2.firstName = 'khan';
myObj2.lastName = 'islam'
console.log(myObj2.fullName())
console.log(myObj2.fullNameProf())



