import {DaoInterface} from './DaoInterface'
import Carro from './Carro'

export default class ConcessionariaDao implements DaoInterface {
    nomeTabele: string = 'tb_pessoa';

    inserir(object: Carro): boolean {
        console.log('Lógica Insert');
        return true;
    }
    
    atualizar(object: Carro): boolean {
        console.log('Lógica Update');
        return true;
    }
    
    remover(id: number): Carro {
        console.log('Lógica Delete');
        return new Carro('',0);
    }
    
    selecionar(id: number): Carro {
        console.log('Lógica Select');
        return new Carro('',0);
    }
    
    selecionarTodos(): [Carro] {
        console.log('Lógica Select All');
        return [new Carro('',0)]
    }
}