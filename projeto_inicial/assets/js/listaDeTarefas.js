
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
    lista.appendChild(tarefa)
    input.value = ""
}


/*Capturando botão pelo data atribute*/
const button = document.querySelector('[data-form-button]')
button.addEventListener('click', criarTarefa)




const BotaoConclui = () =>{
    const botaoConcluir = document.createElement('button')
    botaoConcluir.classList.add('check-button')
    botaoConcluir.innerText = "Concluir"
    botaoConcluir.addEventListener('click', concluirTarefa)

    return botaoConcluir
}

const concluirTarefa = (evento) =>{

    const botaoConclui = evento.target /*Retorna elemento cliclado (Alvo)*/

    const tarefaCompleta = botaoConclui.parentElement /*Retorna pai do elemento*/

    tarefaCompleta.classList.toggle('done') /*toggle aplica e retira (true/false) o estilo, basta clicar mais de uma vez*/

}