const $timer = document.getElementById("timer");
const $promo = document.getElementById("promo");

let tiempoRestante = 10 * 60; // 10 minutos en segundos

$timer.innerHTML = "10:00";

function formatTime(tiempo) {
	const minutos = Math.floor(tiempo / 60);
	const segundos = tiempo % 60;

	return `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}

const intervalo = setInterval(() => {
	tiempoRestante--;

	const tiempoFormateado = formatTime(tiempoRestante);
	$timer.innerHTML = tiempoFormateado;

	if (tiempoRestante === 0) {
		clearInterval(intervalo);
		$promo.innerHTML = "PROMOCIÓN FINALIZADA";
	}
}, 1000);
