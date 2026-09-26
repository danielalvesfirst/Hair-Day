import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }){
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    if (!response.ok) {
          throw new Error("Não foi possível deletar no back-end.")
        }

    alert("Agendamento cancelado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("não foi possível cancelar o agendamento.")

    throw error
  }
}