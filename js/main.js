let btnGerarPrompt = document.getElementById('btnGerarPrompt')  //Adicionando event-listener ao botão principal da página.
btnGerarPrompt.addEventListener('click', gerarPrompt)             //Adicionando event-listener ao botão principal da página.


let janelaPrompt = document.createElement('section')    //Criando elementos de janela dinamicamente.
janelaPrompt.setAttribute('id', 'janelaPrompt')

let titulo = document.createElement('h3')               //Criando elementos de janela dinamicamente.
titulo.setAttribute('id', 'tituloPrompt')

let instr = document.createElement('p')                 //Criando elementos de janela dinamicamente.
instr.setAttribute('id', 'instrucoesPrompt')

let botaoFechar = document.createElement('button')       //Criando elementos de janela dinamicamente.
botaoFechar.innerHTML = 'Fechar'
botaoFechar.setAttribute('id', 'btnFecharJanela')
botaoFechar.addEventListener('click', fecharJanela)

let corpoMain = document.getElementsByTagName('main')[0]

function gerarPrompt(){     //Função principal: exibe um prompt aleatório.
    numRand = 0
    numRep = 0

    while (numRand <= 0){
        numRand = parseInt(Math.random() * (19-1) + 1)  //[!!!]
        numRep = numRand
        if (numRand == numRep) { numRand += 1 }
    }

    switch (numRand){
        case 1:
            titulo.innerHTML = `#001 - Calculadora`
            instr.innerHTML = `Crie uma interface de botões que permita o usuário 
            realizar cálculos.`
        break

        case 2:
            titulo.innerHTML = `#002 - Alterando cores`
            instr.innerHTML = `Crie uma interação que permita o usuário 
            alterar a cor de fundo da página para qualquer cor que ele escolher.`
        break

        case 3:
            titulo.innerHTML = `#003 - Descobrindo a idade`
            instr.innerHTML = `Construa uma interface em HTML que receba o nome 
            e idade do usuário. Devolva a informação na tela estimando o ano em que o usuário 
            nasceu, com as informações que ele colocou antes. É necessário utilizar de um dos 
            recursos do JavaScript que consegue retornar a data exata.`
        break

        case 4:
            titulo.innerHTML = `#004 - Semáforo`
            instr.innerHTML = `Considerando as três cores de um semáforo, crie uma interface 
            em que o usuário consiga selecionar uma dessas cores. Uma mensagem deve 
            aparecer dependendo do que o usuário tiver selecionado. Se o sinal selecionado for 
            vermelho, uma mensagem informando para aguardar deve ser mostrada; se for verde, a 
            mensagem mostrada permitirá o avanço e se for amarelo, a mensagem pedirá que o 
            usuário preste atenção.`
        break

        case 5:
            titulo.innerHTML = `#005 - Cadastro`
            instr.innerHTML = `Crie uma interface de cadastro que peça nome de usuário, e-mail, 
            senha e confirmação de senha. Ao cadastrar, uma mensagem no topo da página deve ser 
            mostrada confirmando o cadastro. O cadastro só será realizado se: o nome de usuário 
            não for o mesmo que a senha; campos de senha e confirmação de senha estiverem 
            incorretos e se há campos não preenchidos. Informe ao usuário através de alertas 
            toda vez que as condições para o cadastro não forem satisfeitas.`
        break

        case 6:
            titulo.innerHTML = `#006 - Dia, tarde e noite`
            instr.innerHTML = `Crie uma interface que exibe, de acordo 
            com o sistema, a hora atual. Faça com que os elementos da página, como imagem 
            ilustrando cada horário e cor de fundo também alterem de acordo com o horário 
            especificado.`
        break

        case 7:
            titulo.innerHTML = `#007 - Verificador de idade`
            instr.innerHTML = `Crie uma interface que permita o usuário informar 
            um ano de nascimento e escolher o sexo. Exiba uma imagem correspondente de 
            uma pessoa nascida no ano incluído de acordo com ano atual, e uma mensagem 
            informando a idade exata de uma pessoa nascida nesse ano, com base nas informações 
            incluídas pelo usuário e no ano atual, e também se é um homem ou mulher. Exiba uma 
            mensagem de erro se o campo de ano de nascimento não tiver sido preenchido ou se 
            o ano de nascimento é maior que o ano atual.`
        break

        case 8:
            titulo.innerHTML = `#008 - Contador de números`
            instr.innerHTML = `Crie uma interface que receba um número inicial, um 
            número final e um número de pulos. Exiba a contagem do número inicial até o número 
            final considerando o número de pulos. Valide se os números digitados são valores 
            inteiros; não são valores de caracteres; não são valores vazios; o valor de início 
            não pode ser menor que o valor de fim || ele fará a contagem regressiva.`
        break

        case 9:
            titulo.innerHTML = `#009 - Tabuada`
            instr.innerHTML = `Crie uma interface que receba em um input um valor positivo inteiro. 
            Realize o cálculo de multiplicação exibindo o valor dentro de um select com a 
            tabuada de 0 a 10 em várias options diferentes.`
        break

        case 10:
            titulo.innerHTML = `#010 - Dado`
            instr.innerHTML = `Crie um simulador de rolagem de dados. Faça com que, dependendo do número 
            que cair, uma imagem correspondente do dado seja exibida na tela.`
        break

        case 11:
            titulo.innerHTML = `#011 - Analisador de Números`
            instr.innerHTML = `Monte uma interface que recebe um número entre 1 e 100. 
            Um botão 'adicionar' adiciona o número em uma lista de opções, e em um vetor de números 
            no código. Exiba uma mensagem de erro toda vez que o usuário tentar adicionar um número 
            já existente na lista ou se ele tentar adicionar um valor vazio, e também se o número 
            não estiver entre 1 e 100. Um botão 'finalizar', se tiver pelo menos 3 números dentro 
            da lista, vai exibir uma mensagem no corpo da página informando: todos os números 
            adicionados; o maior valor dentre os números; o menor valor dentre os números; a soma 
            de todos os valores e a média dos valores digitados. Considere o uso de funções para a 
            resolução deste exercício.`
        break

        case 12:
            titulo.innerHTML = `#012 - Figurinha`
            instr.innerHTML = `No terminal, rode um programa simulando a troca de figurinhas entre 
            dois objetos do tipo 'Pessoa'. Cada pessoa possui um nome e um número de figurinhas, 
            bem como a ação de dar figurinha para outra pessoa. Crie uma condição que analise 
            se é possível passar o número informado de figurinhas de acordo com a quantidade 
            atual ou não.`
        break

        case 13:
            titulo.innerHTML = `#013 - criarTexto()`
            instr.innerHTML = `Crie uma função 'criarTexto()' que passe o conteúdo de 
            texto, estilo de fonte e cor de texto como parâmetros para resumir a criação de um 
            parágrafo em HTML.`
        break

        case 14:
            titulo.innerHTML = `#014 - Lista de elementos`
            instr.innerHTML = `Crie uma interface onde o usuário consiga adicionar 
            elementos através de um input em uma lista. Um outro input de busca será utilizado para 
            verificar se há um elemento já adicionado na lista. O resultado deverá ser exibido 
            assim que o usuário realizar a busca. Permita com que o usuário também consiga 
            deletar qualquer índice existente.`
        break

        case 15:
            titulo.innerHTML = `#015 - じゃんけんぽん!`
            instr.innerHTML = `Crie um simulador de pedra, papel e tesoura, onde o usuário 
            consiga selecionar um movimento dentre os três contra o algoritmo. O resultado, 
            dependendo se o usuário ganhou ou não, deve ser mostrado na tela.`
        break

        case 16:
            titulo.innerHTML = `#016 - Player de Vídeo`
            instr.innerHTML = `Crie uma página que contenha dois vídeos diferentes. 
            Os dois vídeos não terão o parâmetro 'controls' por padrão. Crie 
            os seguintes botões na tela: play/pause; aumentar e diminuir volume; habilitar 
            tela cheia e aumentar e diminuir tamanho do vídeo. Com JavaScript, faça com que 
            os botões executem suas devidas funções para simular um player de vídeo.`
        break

        case 17:
            titulo.innerHTML = `#017 - Criar Post`
            instr.innerHTML = `Crie uma página onde o usuário consiga criar uma postagem. 
            O usuário poderá anexar uma foto e inserir uma legenda. Um botão 'postar', quando 
            pressionado, fará com que a postagem que o usuário criou apareça na tela. 
            Uma vez que o post foi criado, um campo para inserir comentários estará disponível, 
            permitindo o usuário comentar na própria postagem. Crie condições para a criação de 
            postagem por parte do usuário com algumas validações.`
        break

        case 18:
            titulo.innerHTML = `#018 - Caractere na tabela ASCII`
            instr.innerHTML = `Num input de texto, permita que o usuário insira 
            um caractere qualquer e retorne a informação na tela indicando a posição exata desse 
            caractere na tabela ASCII.`
        break

        case 19:
            titulo.innerHTML = `#019 - País A e País B`
            instr.innerHTML = `O País A possui 80.000 habitantes, com uma taxa anual 
            de crescimento de população de 3%, enquanto que o país B possui 200.000 habitantes, 
            com uma taxa anual de crescimento de população de 1,5%. Exiba a quantidade de anos 
            que o País A precisa para igualar ou superar a população do País B.`
        break
    }

    corpoMain.appendChild(janelaPrompt)
    janelaPrompt.appendChild(titulo)
    janelaPrompt.appendChild(instr)
    janelaPrompt.appendChild(botaoFechar)
}

function fecharJanela(){
    corpoMain.removeChild(janelaPrompt)
}