import {DaoInterface} from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {

    nomeTabele: string = '';

    inserir(object: T): boolean {
        console.log('Lógica Insert');
        return true;
    }
    
    atualizar(object: T): boolean {
        console.log('Lógica Update');
        return true;
    }
    
    remover(id: number): T {
        console.log('Lógica Delete');
        return Object();
    }
    
    selecionar(id: number): T {
        console.log('Lógica Select');
        return Object();
    }
    
    selecionarTodos(): [T] {
        console.log('Lógica Select All');
        return [Object()]
    }
}