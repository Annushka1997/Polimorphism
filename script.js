"use strict";

// Առաջին հարցի պատասխանը

const dogMP3 = document.querySelector('#dogMP3');
const catMP3 = document.querySelector('#catMP3');
const tigerMP3 = document.querySelector('#tigerMP3');


class Animal {
    constructor(animal){
        this.animal = animal;
    }
    say(){
        if (this.animal === "dog") {
            //console.log("rrrrr,I'm an animal");
            console.log("woof,woof !!!");
        } else if (this.animal === "cat") {
           // console.log("rrrrr,I'm an animal");
            console.log("Meow !!!");
        } else if (this.animal === "tiger") {
            // console.log("rrrrr,I'm an animal");
            console.log("RRRRRR,i am tiger !!!");;
        }
    }
    voice(){
        if (this.animal === "dog") {
           dogMP3.play();
        } else if (this.animal === "cat") {
            catMP3.play();
        } else if (this.animal === "tiger") {
            tigerMP3.play();
        } else {
            console.log("Error");
        }
    }
}


const mainProto = new Animal();
const dog = new Animal("dog");
const cat = new Animal("cat");
const tiger = new Animal("tiger");

// mainProto.say();
dog.say();
cat.say();

// Երկրորդ հարցի պատասխանը

class User {
    constructor (name,password,age){
        this.name = name;
        this.age = age;
        this._password = password;
    }
   
    // #name = this.name;

    // #sayHi(){
    //     console.log(`Hi dear, ${this.#name}`);
    // }
    get Name(){
        return this._password;
        // return this.#name;
    }
    set Name(s){
        this._password = s;
        // this.#name=s;
    }
}

const newAnna = new User("Anna",7,24);
console.log(newAnna);
// newAnna.#name = "Lara";
console.log(newAnna.Name);


// 3
const dogBtn = document.querySelector('#dog');
const catBtn = document.querySelector('#cat');
const tigerBtn = document.querySelector('#tiger');

dogBtn.addEventListener('click', function(){
    dog.voice();
});
catBtn.addEventListener('click', function(){
    cat.voice();
});
tigerBtn.addEventListener('click', function(){
    tiger.voice();
});

