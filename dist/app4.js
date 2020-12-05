"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao_1 = __importDefault(require("./ConcessionariaDao"));
console.log('-------CONCESSIONARIADAO---------');
var dao = new ConcessionariaDao_1.default();
var concessionaria = new Concessionaria_1.default('', []);
dao.atualizar(concessionaria);
dao.inserir(concessionaria);
dao.remover(1);
dao.selecionar(1);
dao.selecionarTodos();
console.log('-------PESSOADAO---------');
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao_1 = __importDefault(require("./PessoaDao"));
var pessoaDao = new PessoaDao_1.default();
var pessoa = new Pessoa_1.default('', '');
pessoaDao.atualizar(pessoa);
pessoaDao.inserir(pessoa);
pessoaDao.remover(1);
pessoaDao.selecionar(1);
pessoaDao.selecionarTodos();
console.log('-------CARRODAO---------');
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao_1 = __importDefault(require("./CarroDao"));
var carroDao = new CarroDao_1.default();
var carro = new Carro_1.default('', 0);
carroDao.atualizar(carro);
carroDao.inserir(carro);
carroDao.remover(1);
carroDao.selecionar(1);
carroDao.selecionarTodos();
console.log('-------MOTODAO---------');
var Moto_1 = __importDefault(require("./Moto"));
var MotoDao_1 = __importDefault(require("./MotoDao"));
var motoDao = new MotoDao_1.default();
var moto = new Moto_1.default();
motoDao.atualizar(moto);
motoDao.inserir(moto);
motoDao.remover(1);
motoDao.selecionar(1);
motoDao.selecionarTodos();
