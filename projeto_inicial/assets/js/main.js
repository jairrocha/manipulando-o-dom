
import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

const criarTarefa = (event) => {

    event.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add("task")
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = ""
}

/*Capturando botão pelo data atribute*/
const button = document.querySelector('[data-form-button]')
button.addEventListener('click', criarTarefa)








