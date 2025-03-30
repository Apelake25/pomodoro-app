# ⏱️ Temporizador Pomodoro con IA y Chatbot Motivador

Este es un proyecto de desarrollo web que implementa un **temporizador Pomodoro**, técnica que mejora la productividad mediante bloques de trabajo de 25 minutos. Además, incluye una función básica de **inteligencia artificial** y un **chatbot motivador** que adapta mensajes según el rendimiento del usuario.

---

## 🎯 Objetivo del Proyecto

Crear una aplicación web funcional, visualmente atractiva y con una lógica inteligente que:
- Permita controlar sesiones de trabajo Pomodoro.
- Adapte mensajes de descanso según el rendimiento.
- Integre un chatbot motivacional que actúe como asistente.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos y diseño visual.
- **JavaScript**: Lógica del temporizador, IA y chatbot.
- **Visual Studio Code**: Editor de desarrollo.
- **Git & GitHub**: Control de versiones y repositorio online.

---

## 🧠 Inteligencia Artificial Aplicada

Aunque sencilla, la IA en este proyecto funciona como un **sistema experto basado en reglas**, capaz de:

- Detectar cuántas sesiones ha completado el usuario.
- Recomendar descansos largos o cortos según el progreso.
- Adaptar mensajes motivadores del chatbot automáticamente.

Ejemplo de lógica:
```javascript
if (sessionCount % 4 === 0) {
  alert("¡Descanso largo! Te lo has ganado.");
} else {
  alert("¡Buen trabajo! Tómate un descanso corto.");
}
