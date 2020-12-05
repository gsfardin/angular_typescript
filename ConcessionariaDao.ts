import {DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'

export default class ConcessionariaDao implements DaoInterface {
    nomeTabele: string = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean {
        console.log('Lógica Insert');
        return true;
    }
    
    atualizar(object: Concessionaria): boolean {
        console.log('Lógica Update');
        return true;
    }
    
    remover(id: number): Concessionaria {
        console.log('Lógica Delete');
        return new Concessionaria('', []);
    }
    
    selecionar(id: number): Concessionaria {
        console.log('Lógica Select');
        return new Concessionaria('', []);
    }
    
    selecionarTodos(): [Concessionaria] {
        console.log('Lógica Select All');
        return [new Concessionaria('', [])]
    }
}