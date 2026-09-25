import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// define a data minima sendo a atual e define a data minima sendo a atual
selectedDate.value = inputToday

selectedDate.min = inputToday

form.onsubmit = (event) => {
  // Previne o comportamento padrão de carregar a página

  event.preventDefault()

  console.log("ENVIADO!")

}