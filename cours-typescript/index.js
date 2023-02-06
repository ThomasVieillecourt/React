"use strict";
let num1 = 24;
let num2;
let numOrString;
////
let array = ["chien", "chat", "poisson"];
let tableau = [];
tableau.push("string");
tableau.push(24);
let objet = {
    id: 0,
    name: "Thomas",
    //   age: "10", => error
};
////
class Gamer {
    constructor(id, name, game) {
        this.id = id;
        this.name = name;
        this.game = game;
    }
}
const faker = new Gamer(0, "Faker", "Lol");
console.log(faker);
/////
const hello = (name) => {
    console.log("Bonjour " + name);
};
/// Enum & Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
const user1 = {
    name: "Thomas",
    attributes: [false, "author"],
    role: Role.ADMIN,
};
if (user1.role === Role.ADMIN) {
    console.log("Afficher la connexion spéciale");
}
