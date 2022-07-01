let panterita = "./images/panterita.jpg";
let vaquita= "./images/vaquita.jpg";
let naranjoso= "./images/naranjoso.webp";
let tricolor= "./images/tricolor.jpg";

function source_image(src){
    var image = document.createElement("img");
    image.src = src;
    document.write("Acá está tu gatito!.");
    document.write("</br>");
    document.body.appendChild(image);
}

let gatito =prompt("Hola! ¿Te gustaria adoptar un gatito? Elija una opción: (Panterita) (Vaquita) (Naranjoso) (Tricolor) o (No quiero)").toLowerCase();
switch(gatito){
    case "panterita":
        source_image(panterita);
        break;
    case "vaquita":
        source_image(vaquita);
        break;
    case "naranjoso":
        source_image(naranjoso);
        break;
    case "tricolor":
        source_image(tricolor);
        break;
    case "No quiero":
        alert("Es una lastima, pero en caso de que quieras adoptar siempre estas a tiempo de actualizar! :)")
        break;
    default:
        alert("Por favor, actualiza y elegi alguna de las opciones mencionadas anteriormente para que un gatito tenga casa!")
        break;
}