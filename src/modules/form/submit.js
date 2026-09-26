import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"

import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// define a data minima sendo a atual e define a data minima sendo a atual
selectedDate.value = inputToday

selectedDate.min = inputToday

form.onsubmit = async (event) => {
  // Previne o comportamento padrão de carregar a página

  event.preventDefault()

try {
  //Recuperando o nome do cliente
  const name = clientName.value.trim()
  if (!name) {
    return alert("Informe o nome do cliente!")
  }

  // recupera horário selecionado.
  const hourSelected = document.querySelector(".hour-selected")

  // recupera o horário selecionado.
  if (!hourSelected) {
    return alert("Selecione a hora.")
  }

  // recupera somente a hora
  const [hour] = hourSelected.innerText.split(":")

  // insere a hora na data
  const when = dayjs(selectedDate.value).add(hour, "hour")

  // gera um id
  const id = new Date().getTime()

  // faz agendamento
  await scheduleNew({
    id,
    name,
    when,
  })

  // recarrega os agendamentos
  await schedulesDay()

  // limpa o input de nome do cliente
  clientName.value = ""

} catch (error) {
  alert("Não foi possível realizar o agendamento.")
}

}