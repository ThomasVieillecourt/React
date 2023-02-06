let num1 = 24;
let num2: number;
let numOrString: number | string;

////

let array = ["chien", "chat", "poisson"];
let tableau: (number | string)[] = [];
tableau.push("string");
tableau.push(24);

////
interface Player {
  id: number;
  name: string;
  age?: number;
}

let objet: Player = {
  id: 0,
  name: "Thomas",
  //   age: "10", => error
};

////

class Gamer {
  id: number;
  name: string;
  game?: string;

  constructor(id: number, name: string, game?: string) {
    this.id = id;
    this.name = name;
    this.game = game;
  }
}

const faker = new Gamer(0, "Faker", "Lol");
console.log(faker);

/////

const hello = (name?: string): void => {
  console.log("Bonjour " + name);
};

/// Enum & Tuple

enum Role {
  ADMIN,
  PREMIUM,
  BASIC,
}

interface User {
  name: string;
  attributes: [number | boolean, string];
  role: Role;
}

const user1: User = {
  name: "Thomas",
  attributes: [false, "author"],
  role: Role.ADMIN,
};

if (user1.role === Role.ADMIN) {
  console.log("Afficher la connexion spéciale");
}
