const containerE1 = document.querySelector(".container");

const carrers = ["youtuber", "Entreprenur",
  "Software Developer",  "Teacher", "Engineer", "Scientist", "Artist", "Musician", "Actor"];

  const carrersIndex = 0

  let characterIndex = 0;

  updateText();
  function updateText() {
    containerE1.innerHTML = `
    <h1>I am a ${carrers[carrersIndex].slice(0,characterIndex)} </h1>
    `;
  }

