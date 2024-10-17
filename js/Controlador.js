import Cl_vCine from "./Cl_vCine.js";
import Cl_vFamilia from "./Cl_vFamilia.js";
import Cl_mCine from "./Cl_mCine.js";
import Cl_mFamilia from "./Cl_mFamilia.js";
export default class Controlador {
    constructor() {

        this.mCine = new Cl_mCine();
        this.vFamilia = new Cl_vFamilia(this);
        this.vCine = new Cl_vCine(this);

    }

    mostrarVistaFamilia() {
        this.vCine.ocultar();
        this.vFamilia.mostrar();
    }

    mostrarVistaCine() {
        this.vFamilia.ocultar();
        this.vCine.mostrar();
    }

    agregarFamilia({montoInicial, nombFamilia, cantEntradas, dia}) {

        let familia = new Cl_mFamilia({montoInicial, nombFamilia, cantEntradas, dia});
        this.mCine.procesarFamilia(familia);
        this.vCine.reportarCine({
            montoInicial: familia.montoInicial,
            nombFamilia: familia.nombFamilia,
            cantEntradas: familia.cantEntradas,
            dia: familia.dia,
            montoapagar: this.mCine.precioBoleto(),
            montoIniCaja: this.mCine.montoIniCaja(),
            totalJornada: this.mCine.totalJornada(),
            promMontoLunes: this.mCine.promMontoLunes(),
            familiaPagoMas: this.mCine.familiaPagoMas(),
            nombFamiliaPagoMas :this.mCine.nombFamiliaPagoMas(),
        });
        this.mostrarVistaCine();
    }
}