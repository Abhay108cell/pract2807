const bodyE1 = document.querySelector("body");
bodyE1.addEventListener("mousemove", (event)=>{
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const span1 = document.createElement("span")
  span1.style.left = xPos + "px"
  span1.style.top = yPos + "px"
  bodyE1.appendChild(span1)
})     

