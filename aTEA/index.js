const containerE1 = document.querySelector(".container");

const carrers = ["youtuber","Entreprenur",
  "Software Developer", "Teacher", "Engineer", "Scientist", "Artist", "Musician", "Actor"];

  let carrersIndex = 0

  let characterIndex = 0;

  updateText();
  function updateText() {
    characterIndex++

    containerE1.innerHTML = `
    <h1>I am a ${carrers[carrersIndex].slice(0,characterIndex)} </h1>
    `;
    if (characterIndex === carrers[carrersIndex].length) {
      carrersIndex++;
      characterIndex = 0;
      }
    setTimeout(updateText, 300);
  }

