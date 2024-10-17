export default class Cl_mCine {
    constructor() {
        this.acumCaja = 0;
        this.familiaPagoMax = 0;
        this.contLunes = 0; 
        this.acumMontoLunes = 0; 
        this.descuentoBoleto = 0; 
        this.auxNombreFamilia = ""; 
        this.montoIni = 0;
        this.dinero3 = 0;
    }


    procesarFamilia(familia) {
        if (familia.dia === 1) {
            this.descuentoBoleto = (familia.montoPagar() * 0.5);
            this.acumCaja += this.descuentoBoleto;
            this.contLunes++;
            this.acumMontoLunes += this.descuentoBoleto;
            this.acumCaja += familia.montoCaja();
        } else {

            this.descuentoBoleto = familia.montoPagar();
            this.acumCaja += this.descuentoBoleto;
            this.acumCaja += familia.montoCaja();
        }
        if (this.descuentoBoleto > this.familiaPagoMax) {
            this.familiaPagoMax = this.descuentoBoleto;
            this.auxNombreFamilia = familia.nombFamilia;
        }
        this.montoIni = familia.montoCaja();

    }
    montoIniCaja(){
        return this.montoIni;
    }

    promMontoLunes() {
        return (this.acumMontoLunes / this.contLunes);
    }
    totalJornada() {
        return this.acumCaja;
    }
    precioBoleto() {
        return this.descuentoBoleto;
    }
    familiaPagoMas() {
        return this.familiaPagoMax;
    }
    nombFamiliaPagoMas() {
        return this.auxNombreFamilia;
    }
}
