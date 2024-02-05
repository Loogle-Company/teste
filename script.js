// Adiciona as classes 'a' e 'b' após 2 segundos
setTimeout(function () {
    document.getElementById('a').classList.add('a');
    document.getElementById('b').classList.add('b');

    // Adiciona a classe 'b-hidden' à div B após a transição
    setTimeout(function () {
        document.getElementById('b').classList.add('b-hidden');
    }, 2000);

    // Oculta as bolinhas brancas do carregamento após 2 segundos
    setTimeout(function () {
        $('.loader div').css('display', 'none');
    }, 100);

}, 0); // Reduzi o tempo para 1 segundo para que o texto seja exibido imediatamente

// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Seu código existente para carregamento da página

    // Após o carregamento, adicione o código para controlar a visibilidade da .direita
    var direitaElement = document.querySelector('.direita');

    function showElement() {
        direitaElement.style.opacity = 1;
    }

    // Exemplo: Aplicar showElement após 2 segundos
    setTimeout(showElement, 0);
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    var perfeitoElement = document.querySelector('.perfeito');

    function showElement() {
        perfeitoElement.style.top = "0px";
    }

    // Exemplo: Aplicar showElement após 2 segundos
    setTimeout(showElement, 0);
});

document.addEventListener("DOMContentLoaded", function () {
    var botoesElement = document.querySelector('.botoes');

    function ajustarPosicaoTop() {
        // Verificar a largura da tela
        var larguraDaTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Se a largura da tela for menor ou igual a 1280 pixels, ajustar o top para 200px
        if (larguraDaTela <= 1280) {
            botoesElement.style.top = "500px";
        }

        // Se a largura da tela estiver entre 1280 e 1440 pixels, ajustar o top para 1000px
        else if (larguraDaTela > 1280 && larguraDaTela <= 1440) {
            botoesElement.style.top = "500px";
        } else {
            
            // Caso contrário, manter o top como 0px
            botoesElement.style.top = "600px";
        }
    }

    // Exemplo: Aplicar showElement para os botões após 2 segundos
    setTimeout(function () {
        ajustarPosicaoTop();

        // Adicionar um ouvinte de redimensionamento para ajustar a posição top quando a tela for redimensionada
        window.addEventListener('resize', ajustarPosicaoTop);
    }, 0);
});

document.addEventListener("DOMContentLoaded", function() {
    var menuElement = document.querySelector('.menu');

    function ajustarPosicaoTop() {
        // Verificar a largura da tela
        var larguraDaTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Se a largura da tela for menor ou igual a 600 pixels, ajustar o top para 0%
        if (larguraDaTela <= 600) {
            menuElement.style.top = "43%";
        } else if (larguraDaTela <= 1440) {
            // Se a largura da tela for menor ou igual a 1440 pixels, ajustar o top para 43%
            menuElement.style.top = "43%";
        } else {
            // Caso contrário, ajustar o top para 25%
            menuElement.style.top = "25%";
        }
    }



    // Exemplo: Aplicar ajustarPosicaoTop para o menu após 2 segundos
    setTimeout(function() {
        ajustarPosicaoTop();

        // Adicionar um ouvinte de redimensionamento para ajustar a posição top quando a tela for redimensionada
        window.addEventListener('resize', ajustarPosicaoTop);
    }, 0);
});


document.addEventListener("DOMContentLoaded", function() {
    var botaoMenu = document.getElementById('botaoMenu');
    var menuElement = document.querySelector('.menu');
    var direitaElement = document.querySelector('.direita');

    botaoMenu.addEventListener('click', function() {
        menuElement.classList.toggle('aberto');
        direitaElement.classList.toggle('visivel');

        // Altera o texto do botão
        botaoMenu.textContent = menuElement.classList.contains('aberto') ? 'Fechar' : 'Menu';

        // Adiciona/remova a classe fecharMenu conforme o estado do menu
        botaoMenu.classList.toggle('fecharMenu', menuElement.classList.contains('aberto'));

        // Use a propriedade CSS display diretamente para mostrar/ocultar .direita
        direitaElement.style.display = direitaElement.classList.contains('visivel') ? 'block' : 'none';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var botaoMenu = document.getElementById('botaoMenu');

    // Exemplo: Ocultar botão por 2 segundos
    setTimeout(function() {
        botaoMenu.style.display = 'block'; // ou 'inline' ou 'inline-block' dependendo do seu layout
    }, 0);

    // Adiciona o evento de clique
    botaoMenu.addEventListener('click', function() {
        // Adicione aqui o código que deseja executar ao clicar no botão
        // Por exemplo, mostrar/ocultar elementos, adicionar classes, etc.
    });
});

        // Função para rolar para o final da página
        function rolarParaBaixo() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }

        // Adicione um ouvinte de evento para o clique no botão de endereço
        var botaoEndereco = document.getElementById("botaoEndereco");
        botaoEndereco.addEventListener("click", function() {
            // Redirecionar para a página "./local"
            window.location.href = "./js/local/vid/index.html";
        });
