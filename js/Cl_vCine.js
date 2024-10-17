export default class Cl_vCine {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblMostrardineroCaja = document.getElementById("mainForm_lblMostrardineroCaja");
        this.lblmontoIniCaja = document.getElementById("mainForm_lblmontoIniCaja");
        this.lblFamiliaPago = document.getElementById("mainForm_lblFamiliaPago");
        this.lblPromedioLunes = document.getElementById("mainForm_lblPromedioLunes");
        this.lblTotalJornada = document.getElementById("mainForm_lblTotalJornada");
        this.lblCostFamiliaPagoMas = document.getElementById("mainForm_lblCostFamiliaPagoMas");
        this.lblNombFamiliaPagoMas = document.getElementById("mainForm_lblNombFamiliaPagoMas");
        this.btAgregar.onclick = () => controlador.mostrarVistaFamilia();
    }


    mostrar() {
        this.vista.hidden = false;
    }


    ocultar() {
        this.vista.hidden = true;
    }


    reportarCine({
        montoInicial,
        nombFamilia,
        cantEntradas,
        dia,
        montoapagar,
        totalJornada,
        promMontoLunes,
        familiaPagoMas,
        nombFamiliaPagoMas,
        


    }) {this.tabla.innerHTML += `
        <tr>
        <td>${nombFamilia}</td>
        <td>${cantEntradas}</td>
        <td>${dia}</td>
        </tr>`
;
        this.lblFamiliaPago.innerHTML = montoapagar;
        this.lblMostrardineroCaja.innerHTML = montoInicial;
        this.lblTotalJornada.innerHTML = totalJornada;
        this.lblPromedioLunes.innerHTML = promMontoLunes;
        this.lblCostFamiliaPagoMas.innerHTML = familiaPagoMas;
        this.lblNombFamiliaPagoMas.innerHTML= nombFamiliaPagoMas;



    }
}
