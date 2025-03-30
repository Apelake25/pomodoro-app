let time = 25 * 60; // Tiempo en segundos
let running = false;
let timerInterval;
let sessionCount = 0; // 👈 NUEVA: cuenta las sesiones completadas

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener("click", () => {
  if (!running) {
    running = true;
    timerInterval = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        running = false;
        sessionCount++; // 👈 Aumenta el número de sesiones
        
        const chatMessage = document.getElementById("chat-message");

        function mostrarMensajeMotivador(sesiones) {
          let mensaje = "";
        
          if (sesiones === 1) {
            mensaje = "¡Buen comienzo! Vamos a por más. 💪";
          } else if (sesiones === 2 || sesiones === 3) {
            mensaje = "¡Sigue así! Estás siendo muy productivo. 🚀";
          } else if (sesiones === 4) {
            mensaje = "¡Wow! Cuatro sesiones completadas. ¡Descanso merecido! 😌";
          } else {
            mensaje = "¡Eres una máquina de productividad! 🔥 Sigue con descansos saludables.";
          }
        
          chatMessage.textContent = mensaje;
        }
        sessionCount++;
mostrarMensajeMotivador(sessionCount);

        
        // 💡 IA aplicada: sugerencias personalizadas
        if (sessionCount % 4 === 0) {
          alert("¡Has completado 4 sesiones! Tómate un descanso largo de 15 minutos 🧘");
        } else {
          alert("¡Buen trabajo! Tómate un descanso corto de 5 minutos ☕");
        }

        // Reinicia el tiempo
        time = 25 * 60;
        updateDisplay();
      }
    }, 1000);
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  time = 25 * 60;
  running = false;
  updateDisplay();
});
