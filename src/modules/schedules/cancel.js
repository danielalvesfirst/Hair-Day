import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// gerar evento de click em cada lista (manhã, tarde e noite)

periods.forEach((period) => {
  // captura o evento de clique
  period.addEventListener("click", async(event) => {
    if(event.target.classList.contains("cancel-icon")) {

      // obtem li pai do elemento clicado

      const item = event.target.closest("li")

      //pega o id do agendamento para remover
      const { id } = item.dataset

      // confirma que o id foi selecionado
      if(id){
        // confirma se o  usuario quer cancelar
        const isconfirm = confirm("Tem certeza que deseja cancelar o agendamento")

        if(isconfirm) {
          // faz a requisição na API para cancelar
          await scheduleCancel({ id })

          item.remove()

          // recarrega os agendamentos
          schedulesDay()
   
        }
      }
    }
  })
})