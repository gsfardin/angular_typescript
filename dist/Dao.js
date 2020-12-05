"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabele = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('Lógica Insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('Lógica Update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Lógica Delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Lógica Select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Lógica Select All');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
