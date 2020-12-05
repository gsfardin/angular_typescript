import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

/* criar carros */
let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* Montar a lista de carros da concessionária */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros)

//console.log(concessionaria.mostrarListaDeCarros())

/* Comprar o carro */
let pessoa = new Pessoa('Gabriel','Veloster')

console.log(pessoa.dizerCarroPreferido())

/* Busca carro preferido na lista */
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
   
    if(carro.getModelo() == pessoa.dizerCarroPreferido()) {

        // Compra o carro preferido
        pessoa.comprarCarro(carro)
    }
})

console.log(pessoa.dizerCarroQueTem())