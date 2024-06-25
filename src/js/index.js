/* 

Objetivo: quando clicarmos no botão, temos que mostrar a imagem de fundo correspondente

-passo 1: dar um jeito de pegar o elemento HTML dos botões

-passo 2: dar um jeito de indentificar o clique do usuário do botão

-passo 3: desmarcar o botão selecionado anterior

-passo 4: marcar o botão clicando como se estivesse selecionada

-passo 5: esconder a imagem de fundo anterior

-passo 6: fazer aparecer a imagem de fundo correspondente ao botão clicando

*/

// passo 1: dar um jeito de pegar o elemento HTML dos botões
        const botoesCarrossel = document.querySelectorAll('.botao');


// passo 2: dar um jeito de indentificar o clique do usuário do botão
        botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
// passo 3: desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

// passo 4: marcar o botão clicando como se estivesse selecionado
        botao.classList.add('selecionado');

// passo 5: esconder a imagem de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

// passo 6: fazer aparecer a imagem de fundo correspondente ao botão clicando
        const imagens = document.querySelectorAll('.imagem');
        imagens[indice].classList.add('ativa');

    })
})