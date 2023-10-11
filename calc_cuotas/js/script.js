//EN ESTA PARTE EL BOTON SE HABILITA EN BASE A LOS CAMPOS LLENOS
function validar () {
    tasaMensual = document.getElementById("tasaMensual").value;
    monto = document.getElementById("monto").value;
    plazo = document.getElementById("plazo").value;
    seltasa = document.getElementById("seltasa").value;
    selgarantia = document.getElementById("selgarantia").value;
    val = 0;

    if (tasaMensual == ""){
        val++;
    }
    if (monto == ""){
        val++;
    }
    if (plazo == ""){
        val++;
    }
    if (seltasa == ""){
        val++;
    }
    if (selgarantia == ""){
        val++;
    }

    if (val == 0){
        document.getElementById("calcular").disabled = false;
    } else {
        document.getElementById("calcular").disabled = true;
    }
}
document.getElementById("tasaMensual").addEventListener("keyup", validar);
document.getElementById("monto").addEventListener("keyup", validar);
document.getElementById("plazo").addEventListener("keyup", validar);
document.getElementById("seltasa").addEventListener("change", validar);
document.getElementById("selgarantia").addEventListener("change", validar);
/*------------------------------------------------------------------------------------------------------*/

// Función para formatear como moneda
function formatoMoneda(input) {
    var valor = input.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    input.value = valor;
}
/*---------------------------------------------------------------------------------------------------------------------*/
function garantiaVehicular() {
    var selgarantia = document.getElementById("selgarantia").value;
    var traspasos = parseInt(document.getElementById("traspasos").value);
    var vehiculoGarantia = parseFloat(document.getElementById("vehiculogarantia").value);
    var traspasos = 0;

    if (selgarantia === "vehicular") {
        traspasos = vehiculoGarantia * 1020;
    } else { 
        traspasos = 0;
    }
    document.getElementById("traspasos").value = traspasos.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}/*--------------------------------------------------------------------------------------------------------------------------------*/
function validarVehiculo() {
    var selgarantia = document.getElementById("selgarantia").value;
    var vehiculoGarantia = document.getElementById("vehiculogarantia");

    if (selgarantia === "vehicular") {
        vehiculoGarantia.disabled = false;
    } else {
       vehiculoGarantia.disabled = true;
       vehiculoGarantia.value = "";
    }
}
/*------------------------------------------------------------------------------------------------------------------------------------*/
function garantiaHipoteca() {
    var hipoteca = parseFloat(document.getElementById("hipoteca").value);
    var monto = parseFloat(document.getElementById("monto").value.replace(/\D/g, ""));
    hipoteca = 0;

    if (selgarantia === "hipotecaria" && monto >= 100000 && monto <=200000) {
        hipoteca = monto * 0.027485;
    } else if (selgarantia === "hipotecaria" && monto >= 200001 && monto <=300000) {
        hipoteca = monto * 0.0194925;
    } else if (selgarantia === "hipotecaria" && monto >= 300001 && monto <=400000) {
        hipoteca = (monto * 0.013495);
    } else if (selgarantia === "hipotecaria" && monto >= 400001 && monto <=500000) {
        hipoteca = (monto * 0.01299625);
    } else if (selgarantia === "hipotecaria" && monto >= 500001 && monto <=600000) {
        hipoteca = (monto * 0.012697);
    } else if (selgarantia === "hipotecaria" && monto >= 600001 && monto <=700000) {
        hipoteca = (monto * 0.0124975);
    } else if (selgarantia === "hipotecaria" && monto >= 700001 && monto <=800000) {
        hipoteca = (monto * 0.012355);
    } else if (selgarantia === "hipotecaria" && monto >= 800001 && monto <=900000) {
        hipoteca = (monto * 0.012248125);
    } else if (selgarantia === "hipotecaria" && monto >= 900001 && monto <=1000000) {
        hipoteca = (monto * 0.012165);
    } else {
        hipoteca = 0;
    }
    document.getElementById("hipoteca").value = hipoteca.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*-----------------------------------------------------------------------------------------------------------------------------------*/
function calcularGastosPapeleria() {
    var monto = parseFloat(document.getElementById("monto").value.replace(/\D/g, ""));
    var papeleria = parseFloat(document.getElementById("papeleria").value);
    var papeleria = 0;

    if (monto >= 5000 && monto <=75000) {
        papeleria = monto * 0.03;
    } else if (monto >= 75001 && monto <=150000) {
        papeleria = monto * 0.025;
    } else if (monto >= 150001 && monto <=700000) {
        papeleria = monto * 0.02;
    }else if (monto >= 700001) {
        papeleria = monto * 0.015;
    }
    document.getElementById("papeleria").value = papeleria.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
function asignarValores() {
    //Gastos de buro en su input
    let buro = 150;
    document.getElementById("buro").value = buro.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //Monto a financiar
    var montoInput = document.getElementById("monto").value;
    var papeleriaInput = document.getElementById("papeleria").value;
    var monto = parseFloat(montoInput.replace(/[,$]/g, ''));
    var papeleria = parseFloat(papeleriaInput.replace(/[,$]/g, ''));

    var seltasa = document.getElementById("seltasa").value;
    var plazo = parseInt(document.getElementById("plazo").value);
    var tasaMensual = parseFloat(document.getElementById("tasaMensual").value) / 100;

    //Total cargos
    var buroInput = document.getElementById("buro").value;
    var traspasosInput = document.getElementById("traspasos").value;
    var hipotecaInput = document.getElementById("hipoteca").value;
    var traspasos = parseFloat(traspasosInput.replace(/[,$]/g, ''));
    var hipoteca = parseFloat(hipotecaInput.replace(/[,$]/g, ''));
    var buroo = parseFloat(buroInput.replace(/[,$]/g, ''));
    var totalCargos = parseFloat(traspasos) + parseFloat(buroo) + parseFloat(hipoteca) + parseFloat(papeleria);
    var totalapagarInput = document.getElementById("totalapagar").value;
    var totalPagar = parseFloat(totalapagarInput.replace(/[,$]/g, ''))

    var montoFin = parseInt(monto);

    

    if (isNaN(monto) || isNaN(plazo) || isNaN(tasaMensual)) {
        alert("Ingrese datos válidos");
        return;
    }

    var interesTotal, cuota, subcuota;

    if (seltasa === "flat") {
        interesTotal = (monto * tasaMensual) * plazo;
        totalPagar = parseFloat(montoFin) + parseFloat(totalCargos) + parseFloat(interesTotal);
        cuota = (totalPagar) / plazo;
    

    }else if (seltasa === "nivelada") {
        /*interesTotal = ((monto * ((tasaMensual * 12 * 0.60) / 12))) * plazo;*/
        subcuota = monto * tasaMensual / (1 - Math.pow(1 + tasaMensual, -plazo));
        interesTotal = subcuota * plazo - monto;
        totalPagar = parseFloat(montoFin) + parseFloat(totalCargos) + parseFloat(interesTotal);
        cuota = totalPagar / plazo;
    }

    //Intereses totales
    document.getElementById("interestotal").value = interesTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //Total Cargos
    document.getElementById("totalcargos").value = totalCargos.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    //Total a pagar
    document.getElementById("totalapagar").value = totalPagar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    //Monto a financiar
    document.getElementById("capitaltotal").value = montoFin.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    
    //CUOTA MENSUAL 
    document.getElementById("cuota").value = cuota.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    alert("La cuota es: L " +  cuota.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
function limpiar() {
    var tasaMensual = document.getElementById("tasaMensual");
    var monto = document.getElementById("monto");
    var plazo = document.getElementById("plazo");
    var seltasa = document.getElementById("seltasa");
    var selgarantia = document.getElementById("selgarantia");
    var vehiculoGarantia = document.getElementById("vehiculogarantia");

    var papeleria = document.getElementById("papeleria");
    var buro = document.getElementById("buro");
    var traspasos = document.getElementById("traspasos");
    var hipoteca = document.getElementById("hipoteca");

    var interesTotal = document.getElementById("interestotal");
    var totalCargos = document.getElementById("totalcargos");
    var totalPagar = document.getElementById("totalapagar");
    var montoFin = document.getElementById("capitaltotal");
    var cuota = document.getElementById("cuota");

    document.getElementById("seltasa").selectedIndex = 0;
    document.getElementById("selgarantia").value = "menaje";
    tasaMensual.value = "";
    monto.value = "";
    plazo.value = "";
    vehiculoGarantia.value = "";
    papeleria.value = "";
    traspasos.value = "";
    buro.value = "";
    hipoteca.value = "";
    interesTotal.value = "";
    totalCargos.value = "";
    totalPagar.value = "";
    montoFin.value = "";
    cuota.value = "";
}