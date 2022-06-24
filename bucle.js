let multiplo = 0;
let tabla = parseInt(prompt("Ingresa el número del que quieres ver su Tabla"));

if(Number.isNaN(tabla)){
    document.write("Número no valido. Por favor ingresa nuevamente.")
}else{
    document.write("Acá está tu tabla del " + tabla + ":)" + "<br>")
while ( multiplo <= 10){
    document.write(tabla+" * "+multiplo+" = "+(tabla*multiplo)+"<br>");
    multiplo++;
}
}