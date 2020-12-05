"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabele = 'tb_pessoa';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('Lógica Insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('Lógica Update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('Lógica Delete');
        return new Carro_1.default('', 0);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('Lógica Select');
        return new Carro_1.default('', 0);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('Lógica Select All');
        return [new Carro_1.default('', 0)];
    };
    return ConcessionariaDao;
}());
exports.default = ConcessionariaDao;
