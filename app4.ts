console.log('-------CONCESSIONARIADAO---------')

import Concessionaria from './Concessionaria';
import {Dao} from './Dao'
//import ConcessionariaDao from './ConcessionariaDao'

//let concessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', [])
let concessionariaDao: Dao<Concessionaria> = new Dao<Concessionaria>()

concessionariaDao.atualizar(concessionaria)
concessionariaDao.inserir(concessionaria)
concessionariaDao.remover(1)
concessionariaDao.selecionar(1)
concessionariaDao.selecionarTodos()

console.log('-------PESSOADAO---------')

import Pessoa from './Pessoa'
//import PessoaDao from './PessoaDao'

//let pessoaDao = new PessoaDao();
let pessoa = new Pessoa('', '')
let pessoaDao: Dao<Pessoa> = new Dao<Pessoa>()

pessoaDao.atualizar(pessoa)
pessoaDao.inserir(pessoa)
pessoaDao.remover(1)
pessoaDao.selecionar(1)
pessoaDao.selecionarTodos()

console.log('-------CARRODAO---------')

import Carro from './Carro'
//import CarroDao from './CarroDao'

//let carroDao = new CarroDao();
let carro = new Carro('', 0)
let carroDao: Dao<Carro> = new Dao<Carro>()

carroDao.atualizar(carro)
carroDao.inserir(carro)
carroDao.remover(1)
carroDao.selecionar(1)
carroDao.selecionarTodos()

console.log('-------MOTODAO---------')

import Moto from './Moto'
//import MotoDao from './MotoDao'

//let motoDao = new MotoDao();
let moto = new Moto()
let motoDao: Dao<Moto> = new Dao<Moto>()

motoDao.atualizar(moto)
motoDao.inserir(moto)
motoDao.remover(1)
motoDao.selecionar(1)
motoDao.selecionarTodos()