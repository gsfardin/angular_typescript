"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
/* criar carros */
var carroA = new Carro_1.default('Dodge Journey', 4);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Cerato', 4);
/* Montar a lista de carros da concessionária */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av. Paulista', listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarros())
/* Comprar o carro */
var pessoa = new Pessoa_1.default('Gabriel', 'Veloster');
console.log(pessoa.dizerCarroPreferido());
/* Busca carro preferido na lista */
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro.getModelo() == pessoa.dizerCarroPreferido()) {
        // Compra o carro preferido
        pessoa.comprarCarro(carro);
    }
});
console.log(pessoa.dizerCarroQueTem());
