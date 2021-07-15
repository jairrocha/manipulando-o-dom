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

export default BotaoConclui