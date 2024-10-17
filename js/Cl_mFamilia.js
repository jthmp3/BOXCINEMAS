export default class Cl_mFamilia {
    constructor({montoInicial, nombFamilia, cantEntradas, dia}) {
        this.montoInicial = montoInicial;
        this.nombFamilia = nombFamilia;
        this.cantEntradas = cantEntradas;
        this.dia = dia;
    }


    set montoInicial(montoInicial) {
        this._montoInicial = +montoInicial;
    }
    get montoInicial() {
        return this._montoInicial;
    }

    set nombFamilia(nombFamilia) {
        this._nombFamilia = nombFamilia;
    }
    get nombFamilia() {
        return this._nombFamilia;
    }


    set cantEntradas(cantEntradas) {
        this._cantEntradas = +cantEntradas;
    }
    get cantEntradas() {
        return this._cantEntradas;
    }


    set dia(dia) {
        this._dia = +dia;
    }
    get dia() {
        return this._dia;
    }

    montoPagar() {
        return this.cantEntradas*3;
    }
    montoCaja() {
        return this.montoInicial;
    }
}