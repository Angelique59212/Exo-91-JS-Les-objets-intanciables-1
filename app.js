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
        return this.age.join(',');
    }

    //Return sex
    this.getSex = function () {
        return this.sex.join(',');
    }

    //Return hobbies
    this.getHobbies = function () {
        return this.hobbies.join(',');
    }
}

let angelique = new Person ('Dehainaut','Angélique', 33 , 'femme', ['l/écriture', 'le chant', 'la musique']) ;
let louane = new Person('Laurent', 'Louane', 9,'femme', ['la boxe', 'les chevaux', 'la musique']);

perso1 = document.getElementById("perso1");
perso1.innerHTML = angelique;
perso2 = document.getElementById("perso2");
perso2.innerHTML = louane;