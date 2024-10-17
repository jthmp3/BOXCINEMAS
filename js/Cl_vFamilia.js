export default class Cl_vFamilia {
    constructor(controlador) {
        this.vista = document.getElementById("familiaForm");
        this.inMontoInicial = document.getElementById("familiaForm_inMontoInicial");
        this.inNombFamilia = document.getElementById("familiaForm_inNombFamilia");
        this.inCantEntradas = document.getElementById("familiaForm_inCantEntradas");
        this.inDia = document.getElementById("familiaForm_inDia");
        this.btAceptar = document.getElementById("familiaForm_btAceptar");
        this.btAceptar.onclick = () =>
            controlador.agregarFamilia({
                montoInicial: this.inMontoInicial.value,
                nombFamilia: this.inNombFamilia.value,
                cantEntradas: this.inCantEntradas.value,
                dia: this.inDia.value,
            });
        this.ocultar();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}