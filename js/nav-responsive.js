var contador = 1;

function menu() {
	if (contador == 1) {
		document.getElementById("nav").style.left = "0";
		contador = contador + 1;
	} else {
		document.getElementById("nav").style.left = "-100%";
		contador = 1;
	}
}