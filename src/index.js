//criando a "forma"
class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
}

// definindo os "bolos"
let guerreiro = new heroi("Gavric Marwen", "23", "guerreiro")
let mago = new heroi("Elowen Zephyrion", "54", "mago")
let monge = new heroi("Hui Yan", "22", "monge")
let ninja = new heroi("Hanzo Takeshi", "34", "ninja")

//função "forno"
function atacar(heroi){
    let ataque
    if (heroi.tipo === "guerreiro"){
        ataque = "espada" 
    } else if (heroi.tipo === "mago"){
        ataque = "magia"
    } else if(heroi.tipo === "monge"){
        ataque = "artes marciais"
    } else if(heroi.tipo === "ninja"){
        ataque = "shuriken"
    } else {
        ataque = "ataque desconhecido"
    }
    
    console.log(`O ${heroi.tipo} atacou usando ${ataque}`)
}

atacar(guerreiro)