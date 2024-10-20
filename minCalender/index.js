const monthNameE1 = document.getElementById("month-name")
const dayNameE1 = document.getElementById("day-name")
const dayNum1 = document.getElementById("day-number")
const yearE1 = document.getElementById("year")

const date = new Date()
const month = date.getMonth()
monthNameE1.innerText = date.toLocaleString("en",{
  month: "long"
})
