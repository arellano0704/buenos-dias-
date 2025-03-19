// Seleccionar los elementos de audio y letras
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de letras con tiempos ajustados para iniciar en el segundo 40
var lyricsData = [
  { text: "You say I'm like the ice I freeze", time: 0 }, // Antes era 0.5
  { text: "I'm churning out novels like", time: 3 }, // Antes era 3.5
  { text: "Beat poetry on amphetamines", time: 6 }, // Sin cambio
  { text: "I say", time: 15 }, // Antes era 30
  { text: "I say", time: 23}, // Antes era 12 (se repite, revisar si es correcto)
  { text: "Well, my boyfriend's in a band", time: 29 }, // Antes era 41 - 40 = 1
  { text: "He plays guitar while I sing Lou Reed", time:33  }, // Antes era 47 - 40 = 7
  { text: "I've got feathers in my hair", time:37  }, // Antes era 54 - 40 = 14
  { text: "I get down to Beat poetry", time:41  }, // Antes era 59 - 40 = 19
  { text: "And my jazz collection's rare", time:46  }, // Antes era 67 - 40 = 27
  { text: "I can play most anything", time: 50 }, // Antes era 72 - 40 = 32
  { text: "I'm a Brooklyn baby", time: 55 }, // Antes era 78 - 40 = 38
  { text: "I'm a Brooklyn baby", time:59  }, // Antes era 83 - 40 = 43
  { text: "Pa-ta-da-da-da-da-da", time:65  }, // Antes era 91 - 40 = 51
  { text: "Pa-ta-da-da-da-da-da", time: 67 }, // Antes era 97 - 40 = 57
 
];

// Función para actualizar las letras sincronizadas con el audio
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualiza las letras cada segundo
setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);