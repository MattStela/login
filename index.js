//Variáveis
let titulo = document.querySelector('.ttl_form');
let labelNome = document.querySelector('#label_nome');
let inputNome = document.querySelector('#input_nome');
let validNome = false;
let labelUsuario = document.querySelector('#label_usuario');
let inputUsuario = document.querySelector('#input_usuario');
let validUsuario = false;
let labelSenha = document.querySelector('#label_senha');
let inputSenha = document.querySelector('#input_senha');
let validSenha = false;
let btnFinalizarCadastro = document.querySelector('#finalizar_cadastro');
let msg = document.querySelector('#ttl_cadastro')

let botao = document.querySelector('.botao');

//Campo nome
inputNome.addEventListener('keyup', () => {
    //exemplo de como mexer com CSS pelo javascript
    if (inputNome.value.length < 4) {
        btnFinalizarCadastro.setAttribute('style', 'background-color:rgb(255, 2, 2,0.5); cursor: auto;');
        validNome = false;
    } else {
        btnFinalizarCadastro.setAttribute('style', 'color: rgb(255, 255, 255, 0.5);background-color: rgb(0, 0, 0, 0.5);transition: all 0.3s ease-out;cursor: pointer;');
        validNome = true;
    }
})

//Campo Usuário
inputUsuario.addEventListener('keyup', () => {
    //exemplo de como mexer com CSS pelo javascript
    if (inputUsuario.value.length < 4) {
        btnFinalizarCadastro.setAttribute('style', 'background-color:rgb(255, 2, 2,0.5);cursor: auto;');
        validUsuario = false;
    } else {
        btnFinalizarCadastro.setAttribute('style', 'color: rgb(255, 255, 255, 0.5);background-color: rgb(0, 0, 0, 0.5);transition: all 0.3s ease-out;cursor: pointer;');
        validUsuario = true;
    }
})

//Campo Senha
inputSenha.addEventListener('keyup', () => {
    //exemplo de como mexer com CSS pelo javascript
    if (inputSenha.value.length < 6) {
        btnFinalizarCadastro.setAttribute('style', 'background-color:rgb(255, 2, 2,0.5);cursor: auto;');
        validSenha = false;
    } else {
        btnFinalizarCadastro.setAttribute('style', 'color: rgb(255, 255, 255, 0.5);background-color: rgb(0, 0, 0, 0.5);transition: all 0.3s ease-out;cursor: pointer;');
        validSenha = true;
    }
})
//======================================================================================================================================================
function finalizarCadastro() {
    //essas variáveis foram colocadas como false lá em cima, dá uma olhada
    if (validNome && validUsuario && validSenha) {
        msg.innerHTML = 'CADASTROU IHUUU!!! :D';

        //aqui você usa o localstorage pra criar um JSON com a lista do local storage se já tiver registro ou cria um array
        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]')

        //aqui você cria um array de objetos
        listaUsuarios.push(
            {
                nomeCad: inputNome.value,
                usuarioCad: inputUsuario.value,
                senhaCad: inputSenha.value
            }
        )

        //salvando no local storage...
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

        //dá um tempinho aí :D
        setTimeout(() => {
            //redirecionando pro login, que nesse caso é a página inicial
            window.location.href = "../index.html"
        }, 3000)

    } else {
        msg.innerHTML = 'não conseguiu né? :/';
    }
}

//só fazer a autenticação agora :D e o que mais? não lembro, vejo depois