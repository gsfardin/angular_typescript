import Veiculo from './Veiculo'

export default class Carro extends Veiculo {
    
    private numerDePortas: number

    constructor(modelo: string, numeroDePortas: number) {
        super()
        this.modelo = modelo
        this.numerDePortas = numeroDePortas
    }
}