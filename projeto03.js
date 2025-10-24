class Hero {
    constructor(name, age, typeOfHero){
        this.name = name;
        this.age = age;
        this.typeOfHero = typeOfHero;
    }

     attack(){
        let type = this.typeOfHero.toLowerCase();
        let HeroAttack = "";

        if (type === "mago"){
            HeroAttack = "magia";
        } else if (type === "guerreiro"){
            HeroAttack = "espada";
        } else if (type === "monge"){
            HeroAttack = "artes marciais";
        } else if (type === "ninja"){
            HeroAttack = "shuriken";
        } else {
            HeroAttack = "Sem ataque";
        }

        console.log(`O ${this.typeOfHero} atacou usando ${HeroAttack}`);
    }
}

let testHero = new Hero("Testando", 20, "monge");
testHero.attack();
