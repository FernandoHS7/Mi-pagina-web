// Ejercicio 1

var datosEmpresa = new Array(3);
function ArregloDatosEmpresa(){
    for(let i=0; i<datosEmpresa.length; i++){
        datosEmpresa[i] = new Array(3);
    }
}
ArregloDatosEmpresa();
datosEmpresa[0][0] = 120;
datosEmpresa[0][1] = 240;
datosEmpresa[0][2] = 210;
datosEmpresa[1][0] = 240;
datosEmpresa[1][1] = 280;
datosEmpresa[1][2] = 300;
datosEmpresa[2][0] = 400;
datosEmpresa[2][1] = 600; 
datosEmpresa[2][2] = 3000;

function mostrarSueldo(){
    var puesto = parseInt(document.getElementById("puesto").value);
    var nivel = parseInt(document.getElementById("nivel").value);
    var horas = parseFloat(document.getElementById("horas").value);
    if(isNaN(horas) || horas<0){
        document.getElementById("sueldoCalculado").innerHTML = "Ingresa un número valido en el campo";
        return;
    } 
    var sueldoTotal = datosEmpresa[puesto][nivel]*horas;
    document.getElementById("sueldoCalculado").innerHTML = "Sueldo total de: " + sueldoTotal;
}


// Ejercicio 2

function ejercicio3(){
    let matriz = new Array(7);
    for(let i=0; i<matriz.length; i++){
        matriz[i] = new Array(7);
    }
    
    for(let i=0; i<matriz.length; i++){
        for(let j=0; j<matriz.length; j++){
            if(i === 0 || i === 3 || i === 6 || j === 0 || j === 6){
                matriz[i][j] = "S ";
            } else {
                matriz[i][j] = "  ";
            }
        }
    }

    let textoMatriz = "";
    for(let i=0; i<matriz.length; i++){
        for(let j=0; j<matriz.length; j++){
            textoMatriz += matriz[i][j];
        }
        textoMatriz += "<br>";
    }
    document.getElementById("impEjercicio3").innerHTML = '<pre>' + textoMatriz + '</pre>';
}


// Ejercicio 3

var alumnos = new Array(10);
var capturo = false

function capturarAlumnos(){
    alumnos = new Array(10);
    for(let i=0; i<alumnos.length; i++){
        alumnos[i] = prompt("Captura el nombre del alumno " + (i+1) + ":");
    }
    capturo = true;
    mostrarAlumnos();
}

function mostrarAlumnos(){
    let salida = "<h4>Listado de Alumnos:</h4>";
    for(let i=0; i<alumnos.length; i++){
        salida += "Posición [" + i + "]: " + alumnos[i] + "<br>";
    }
    document.getElementById("impAlumnos").innerHTML = salida;
}

function eliminarAlumnosRango(){
    if(!capturo){
        document.getElementById("impAlumnos").innerHTML = "No haz capturado los alumnos";
        return;
    }
    let inicio = parseInt(prompt("Ingresa la posición de inicio para eliminar"));
    let cantidad = parseInt(prompt("Cuántos elementos quieres eliminar"));
    alumnos.splice(inicio, cantidad);
    mostrarAlumnos();
}

function vaciarPosicion(){
    if(!capturo){
        document.getElementById("impAlumnos").innerHTML = "No haz capturado los alumnos";
        return;
    }
    let posicion = parseInt(prompt("Ingresa el índice de la posición que deseas vaciar"));
    if(posicion >= 0 && posicion < alumnos.length){
        alumnos[posicion] = '';
        alert("Posición vaciada correctamente");
    } else {
        alert("Ese índice no existe");
    }
    mostrarAlumnos();
}