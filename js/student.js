let data = JSON.parse(localStorage.getItem("latinData"));

function flashcardGame() {
  let card = data.flashcards[Math.floor(Math.random() * data.flashcards.length)];
  let answer = prompt("Translate: " + card.latin);
  if (answer.toLowerCase() === card.english.toLowerCase()) {
    alert("Correct!");
  } else {
    alert("Incorrect. Answer: " + card.english);
  }
}

function scansionGame() {
  let line = data.scansion[Math.floor(Math.random() * data.scansion.length)];
  let answer = prompt("Scan: " + line.line);
  if (answer === line.answer) {
    alert("Correct!");
  } else {
    alert("Correct scansion: " + line.answer);
  }
}

let packetsDiv = document.getElementById("packets");
data.packets.forEach(p => {
  packetsDiv.innerHTML += `<h3>${p.title}</h3><p>${p.content}</p>`;
});
