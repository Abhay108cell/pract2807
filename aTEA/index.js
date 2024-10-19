const containerE1 = document.querySelector(".container");

const carrers = ["youtuber","Entreprenur",
  "Software Developer", "Teacher", "Engineer", "Scientist", "Artist", "Musician", "Actor"];

  let carrersIndex = 0

  let characterIndex = 0;

  updateText();
  function updateText() {
    characterIndex++
    containerE1.innerHTML = `
    <h1>I am ${carrers[carrersIndex].slice(0,1) === "I" ? 
       "an" : "a"} ${carrers[carrersIndex].slice(0,characterIndex)} </h1>
    `;
    if (characterIndex === carrers[carrersIndex].length) {
      carrersIndex++;
      characterIndex = 0;
      }
      if (carrersIndex === carrers.length){
        carrersIndex = 0;
      }
    setTimeout(updateText, 300);
  }

