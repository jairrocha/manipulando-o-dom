const BotaoDeleta = () =>{

    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.classList.add('check-button')
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta

}


const deletarTarefa = (envento) =>{

    const botaoDeleta = envento.target
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove() /*Remove o objeto*/
    
}

export default BotaoDeleta