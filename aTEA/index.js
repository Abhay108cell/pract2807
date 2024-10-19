const containerE1 = document.querySelector(".container");

const carrers = ["youtuber", "Entreprenur",
  "Software Developer",  "Teacher", "Engineer", "Scientist", "Artist", "Musician", "Actor"];

  const carrersIndex = 0

containerE1.innerHTML = `
<h1>I am a ${carrers[carrersIndex]} </h1>
`;