/*
Lista de tarefas
    [x] Saber quando o botão foi clicado
    [X] Pegar o texto dentro do Input
    [X] Colocar esse texto dentro da tela
    [X] Deletar a tarefa da tela (Quando o usuário clicar no X)
*/

function adicionarTarefa(){
    /* Vai até o html e seleciona a tarefa que o usuário escreveu */
    let valordoInput = document.querySelector('input').value

    /* Criar um item para a lista de tarefas de acordo com o que foi escrito  dentro do input */
    let li = document.createElement('li')
    li.innerHTML = valordoInput + '<span onclick="deletarTarefa(this)">❌</span>' 

    /* Pegar o item que foi escrito no input + o botão de delete e injeta dentro do ul */
    document.querySelector('ul').appendChild(li)

    /* Ao escrever uma tarefa e enviar, o input ficara zerado novamente. */ 
    document.querySelector('input').value = ''
 
}

function deletarTarefa(li){
    li.parentElement.remove()
    
}
