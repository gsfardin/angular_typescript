"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('-------CONCESSIONARIADAO---------');
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Dao_1 = require("./Dao");
//import ConcessionariaDao from './ConcessionariaDao'
//let concessionariaDao = new ConcessionariaDao();
var concessionaria = new Concessionaria_1.default('', []);
var concessionariaDao = new Dao_1.Dao();
concessionariaDao.atualizar(concessionaria);
concessionariaDao.inserir(concessionaria);
concessionariaDao.remover(1);
concessionariaDao.selecionar(1);
concessionariaDao.selecionarTodos();
console.log('-------PESSOADAO---------');
var Pessoa_1 = __importDefault(require("./Pessoa"));
//import PessoaDao from './PessoaDao'
//let pessoaDao = new PessoaDao();
var pessoa = new Pessoa_1.default('', '');
var pessoaDao = new Dao_1.Dao();
pessoaDao.atualizar(pessoa);
pessoaDao.inserir(pessoa);
pessoaDao.remover(1);
pessoaDao.selecionar(1);
pessoaDao.selecionarTodos();
console.log('-------CARRODAO---------');
var Carro_1 = __importDefault(require("./Carro"));
//import CarroDao from './CarroDao'
//let carroDao = new CarroDao();
var carro = new Carro_1.default('', 0);
var carroDao = new Dao_1.Dao();
carroDao.atualizar(carro);
carroDao.inserir(carro);
carroDao.remover(1);
carroDao.selecionar(1);
carroDao.selecionarTodos();
console.log('-------MOTODAO---------');
var Moto_1 = __importDefault(require("./Moto"));
//import MotoDao from './MotoDao'
//let motoDao = new MotoDao();
var moto = new Moto_1.default();
var motoDao = new Dao_1.Dao();
motoDao.atualizar(moto);
motoDao.inserir(moto);
motoDao.remover(1);
motoDao.selecionar(1);
motoDao.selecionarTodos();
