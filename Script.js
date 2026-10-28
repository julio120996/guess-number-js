// === SUPER ADIVINA BROS - Versión DOM ===

// --- Seleccionar elementos del HTML ---
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card');
const puntos = document.getElementById('puntos');
const record = document.getElementById('record');

console.log('Elementos conectados:', inputIntento, btnAdivinar, mensaje);

// --- Variables del juego ---
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let historialIntentos = [];
let puntaje = 0;          // monedas acumuladas entre niveles
let mejorIntentos = null; // récord: menos intentos para ganar

console.log('(DEBUG) Número secreto:', numeroSecreto);

// --- Tu primera función ---
function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

// Prueba la función
mostrarMensaje('🍄 ¡Bienvenido al Reino Champiñón!', '#c62828');

// --- Función principal ---
function verificarIntento() {
  let valor = Number(inputIntento.value);

  // Validar entrada
  if (isNaN(valor) || valor < 1 || valor > 100) {
    mostrarMensaje('⚠️ ¡Ese bloque no existe! Usa un número del 1 al 100', '#bf360c');
    return;
  }

  // Incrementar contador
  intentos++;
  contador.textContent = 'Intentos: ' + intentos;

  // Agregar al historial
  historialIntentos.push(valor);
  historial.textContent = 'Historial: ' + historialIntentos.join(', ');

  // Comparar con el número secreto
  let pista = obtenerPista(valor, numeroSecreto);

  if (valor === numeroSecreto) {
    // Monedas: 100 si aciertas al primer intento, -10 por cada intento extra (mínimo 10)
    let ganadas = Math.max(100 - (intentos - 1) * 10, 10);
    puntaje += ganadas;
    puntos.textContent = '🪙 Puntos: ' + puntaje;

    // Récord: menor cantidad de intentos
    if (mejorIntentos === null || intentos < mejorIntentos) {
      mejorIntentos = intentos;
      record.textContent = '🏆 Récord: ' + mejorIntentos;
    }

    mostrarMensaje('⭐ ¡Nivel completo! Era el ' + numeroSecreto + ' (+' + ganadas + ' monedas)', '#2e7d32');
    btnAdivinar.disabled = true;
    btnReiniciar.style.display = 'inline-block';
    // Celebración visual: la tarjeta brilla verde
    tarjeta.style.borderColor = '#43a047';
    tarjeta.style.boxShadow = '0 0 40px rgba(67, 160, 71, 0.9)';
  } else if (valor > numeroSecreto) {
    mostrarMensaje('⬆️ ¡Muy alto! Salta más abajo. ' + pista, '#c62828');
  } else {
    mostrarMensaje('⬇️ ¡Muy bajo! Salta más arriba. ' + pista, '#1565c0');
  }

  // Limpiar input y enfocar
  inputIntento.value = '';
  inputIntento.focus();
}

// --- Conectar eventos ---
btnAdivinar.addEventListener('click', verificarIntento);

// --- Enter también funciona ---
inputIntento.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    verificarIntento();
  }
});

// --- Reiniciar juego ---
function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  historialIntentos = [];

  contador.textContent = 'Intentos: 0';
  historial.textContent = 'Historial: ';
  mostrarMensaje('🍄 ¡Nuevo nivel! Adivina el número...', '#c62828');

  btnAdivinar.disabled = false;
  btnReiniciar.style.display = 'none';
  inputIntento.value = '';
  inputIntento.focus();

  // Resetear celebración visual
  tarjeta.style.borderColor = '#1a1a1a';
  tarjeta.style.boxShadow = '0 8px 0 #1a1a1a';

  console.log('(DEBUG) Nuevo número secreto:', numeroSecreto);
}

// --- Conectar botón reiniciar ---
btnReiniciar.addEventListener('click', reiniciarJuego);

// --- Pista de cercanía ---
function obtenerPista(intento, secreto) {
  let diferencia = Math.abs(intento - secreto);

  if (diferencia <= 5) {
    return '🔥 ¡Ya ves la bandera!';
  } else if (diferencia <= 15) {
    return '♨️ Caliente';
  } else if (diferencia <= 30) {
    return '🌤️ Tibio';
  } else {
    return '❄️ Frío';
  }
}