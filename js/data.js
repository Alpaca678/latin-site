// Default data (teacher can add more)
let data = {
  users: [
    { username: "student", password: "latin123" }
  ],
  teacher: {
    username: "teacher",
    password: "roma"
  },
  flashcards: [
    { latin: "puella", english: "girl" }
  ],
  scansion: [
    { line: "Arma virumque cano", answer: "– ⏑ ⏑ – ⏑ ⏑ – –" }
  ],
  packets: [
    { title: "Packet 1", content: "First declension nouns" }
  ]
};

if (!localStorage.getItem("latinData")) {
  localStorage.setItem("latinData", JSON.stringify(data));
}
