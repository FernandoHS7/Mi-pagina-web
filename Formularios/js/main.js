function capturarInicio() {
    var nombre = document.getElementById("nombre_usuario").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    alert("Contacto guardado:\nNombre: " + nombre + "\nCorreo: " + correo + "\nTeléfono: " + telefono + "\nAsunto: " + asunto + "\nMensaje: " + mensaje);
}

function capturarAuto() {
    var modelo = document.getElementById("modelo").value;
    var motor = document.getElementById("motor").value;
    var velocidad = document.getElementById("velocidad").value;
    var chasis = document.getElementById("chasis").value;
    var anio = document.getElementById("anio").value;

    alert("Auto guardado:\nModelo: " + modelo + "\nMotor: " + motor + "\nVelocidad: " + velocidad + " km/h\nChasis: " + chasis + "\nAño: " + anio);
}

function capturarEscuderia() {
    var equipo = document.getElementById("nombre_equipo").value;
    var director = document.getElementById("director").value;
    var sede = document.getElementById("sede").value;
    var campeonatos = document.getElementById("campeonatos").value;
    var presupuesto = document.getElementById("presupuesto").value;

    alert("Escudería guardada:\nEquipo: " + equipo + "\nDirector: " + director + "\nSede: " + sede + "\nTítulos: " + campeonatos + "\nPresupuesto: " + presupuesto + " MDD");
}

function capturarCorredor() {
    var piloto = document.getElementById("nombre_piloto").value;
    var dorsal = document.getElementById("numero_dorsal").value;
    var pais = document.getElementById("pais").value;
    var edad = document.getElementById("edad").value;
    var podios = document.getElementById("podios").value;

    alert("Piloto guardado:\nNombre: " + piloto + "\nNúmero: " + dorsal + "\nPaís: " + pais + "\nEdad: " + edad + "\nPodios: " + podios);
}

function capturarRelacion() {
    var piloto = document.getElementById("id_corredor").value;
    var escuderia = document.getElementById("id_escuderia").value;
    var auto = document.getElementById("id_auto").value;
    var sueldo = document.getElementById("sueldo").value;
    var vigencia = document.getElementById("vigencia").value;

    alert("Contrato guardado:\nPiloto: " + piloto + "\nEscudería: " + escuderia + "\nAuto: " + auto + "\nSueldo: " + sueldo + " MDD\nVigencia: " + vigencia);
}