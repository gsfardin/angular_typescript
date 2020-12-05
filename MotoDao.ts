import {DaoInterface} from './DaoInterface'
import Moto from './Moto'

export default class ConcessionariaDao implements DaoInterface {
    nomeTabele: string = 'tb_pessoa';

    inserir(object: Moto): boolean {
        console.log('Lógica Insert');
        return true;
    }
    
    atualizar(object: Moto): boolean {
        console.log('Lógica Update');
        return true;
    }
    
    remover(id: number): Moto {
        console.log('Lógica Delete');
        return new Moto();
    }
    
    selecionar(id: number): Moto {
        console.log('Lógica Select');
        return new Moto();
    }
    
    selecionarTodos(): [Moto] {
        console.log('Lógica Select All');
        return [new Moto()]
    }
}