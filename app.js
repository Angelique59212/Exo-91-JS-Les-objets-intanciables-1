const propriete1 = document.getElementsByClassName("propriete1");
const propriete2 = document.getElementsByClassName("propriete2");
const propriete3 = document.getElementsByClassName("propriete3");
const propriete4 = document.getElementsByClassName("propriete4");
const propriete5 = document.getElementsByClassName("propriete5");


const Person = function (name, firstName,age,sex,hobbies) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.sex = sex;
    this.hobbies = hobbies;

    //Return name and firstName
    this.getNameFirstName = function () {
        return this.name + " " + this.firstName;
    }

    //Return age
    this.getAge = function () {
        return this.age;
    }

    //Return sex
    this.getSex = function () {
        return this.sex;
    }

    //Return hobbies
    this.getHobbies = function () {
        return this.hobbies.join(',');
    }
}

let angelique = new Person ('Dehainaut','Angélique', 33 , 'femme', ['l/écriture', 'le chant', 'la musique']) ;
let louane = new Person('Laurent', 'Louane', 9,'femme', ['la boxe', 'les chevaux', 'la musique']);

perso1 = document.getElementById("perso1");

propriete1[0].innerHTML = angelique.name;
propriete2[0].innerHTML = angelique.firstName;
propriete3[0].innerHTML = angelique.age;
propriete4[0].innerHTML = angelique.sex;
propriete5[0].innerHTML = angelique.hobbies;

perso2 = document.getElementById("perso2");
propriete1[1].innerHTML = louane.name;
propriete2[1].innerHTML = louane.firstName;
propriete3[1].innerHTML = louane.age;
propriete4[1].innerHTML = louane.sex;
propriete5[1].innerHTML = louane.hobbies;

