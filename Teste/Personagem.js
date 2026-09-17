class Personagem {
    constructor(nome, classe, força){
        this.nome = nome;
        this.classe = classe;
        this.força = força;
        this.força = 100;
    }

    status() {
        console.log(`${this.nome} Nivel de força: ${this.força}`);
    }
}

const jogador1 = new Personagem("Aragon", "Guerreiro", 85)
const jogador2 = new Personagem("Gandalf", "Mago", 95)

jogador1.status()
 

