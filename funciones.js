

function quitarCaracteresEspeciales(texto){
	let caracteres = "/[^a-zA-Z 0-9.]+/g";
	var nuevoTexto = "";
	if(texto!=""){
		nuevoTexto = texto.replace(caracteres,'');
	} else {
		alert("El campo está vacío!");
	}
}