import {DaoInterface} from './DaoInterface'
import Pessoa from './Pessoa'

export default class ConcessionariaDao implements DaoInterface {
    nomeTabele: string = 'tb_pessoa';

    inserir(object: Pessoa): boolean {
        console.log('Lógica Insert');
        return true;
    }
    
    atualizar(object: Pessoa): boolean {
        console.log('Lógica Update');
        return true;
    }
    
    remover(id: number): Pessoa {
        console.log('Lógica Delete');
        return new Pessoa('', '');
    }
    
    selecionar(id: number): Pessoa {
        console.log('Lógica Select');
        return new Pessoa('', '');
    }
    
    selecionarTodos(): [Pessoa] {
        console.log('Lógica Select All');
        return [new Pessoa('', '')]
    }
}