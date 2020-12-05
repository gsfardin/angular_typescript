import Concessionaria from './Concessionaria';
import ConcessionariaDao from './ConcessionariaDao'

console.log('-------CONCESSIONARIADAO---------')

let dao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', [])

dao.atualizar(concessionaria)
dao.inserir(concessionaria)
dao.remover(1)
dao.selecionar(1)
dao.selecionarTodos()

console.log('-------PESSOADAO---------')

import Pessoa from './Pessoa'
import PessoaDao from './PessoaDao'

let pessoaDao = new PessoaDao();
let pessoa = new Pessoa('', '')

pessoaDao.atualizar(pessoa)
pessoaDao.inserir(pessoa)
pessoaDao.remover(1)
pessoaDao.selecionar(1)
pessoaDao.selecionarTodos()

console.log('-------CARRODAO---------')

import Carro from './Carro'
import CarroDao from './CarroDao'

let carroDao = new CarroDao();
let carro = new Carro('', 0)

carroDao.atualizar(carro)
carroDao.inserir(carro)
carroDao.remover(1)
carroDao.selecionar(1)
carroDao.selecionarTodos()

console.log('-------MOTODAO---------')

import Moto from './Moto'
import MotoDao from './MotoDao'

let motoDao = new MotoDao();
let moto = new Moto()

motoDao.atualizar(moto)
motoDao.inserir(moto)
motoDao.remover(1)
motoDao.selecionar(1)
motoDao.selecionarTodos()