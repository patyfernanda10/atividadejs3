//array
let participantes = [
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (null),
},
{
    nome: "Davi Maimoni",
    email:"davi@gmail.com",
    dataInscricao: new Date(2024, 4, 10, 19, 20),
    dataCheckIn: new Date (null),
}

]

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to
    (participante.dataInscricao)

let dataCheckIn = dayjs(Date.now())
.to(participante.CheckIn)

if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
    data-email="${participante.email}"
    onclick="fazerCheckIn(event)"
    >
    Confirmar check-in
    </button>
    `
}

return `
<tr>
    <td>
        <strong>
            ${participante.nome}
        </strong>
        <br>
        <small>
        ${participante.email}
        </small>
    </td>

        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
</tr> 
`
}

const atualizarLista = (participantes) => {
    let output = ""
//estrutura de repetição-loop
for (let participante of participantes) {
    output= output + criarNovoParticipante(participante)
}

//substituir informação di html
    document.querySelector("tbody")
    .innerHTML= output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    const participante = {
        nome: dadosDoFormulario.get('nome'),
        email: dadosDoFormulario.get('email'),
        dataInscricao: new Date(),
        dataCheckIn: null
    }
    const participanteExistente =participantes.find(
        (p) => {
            return p.email == participante.email
        }
    )
    if(participanteExistente) {
        alert('Email já cadastrado!')
        return
    }

    participantes = [participante, ...participantes]
    atualizarLista(participantes)

    //limpar oo formulario
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
}
const fazerCheckIn = (event) => {
 //confirmar se realmente quer fazer o check-in  
const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

if(confirm(mensagemConfirmacao) == false) {
    return
}

 //encontrar o participante dentro da lista
 const participante = participantes.find((p)=> {
    return p.email == event.target.dataset.email
 })   
 //atualizar o check-in do participante
 participante.dataCheckIn = new Date()

 //atualizar alistta de participantes
 atualizarLista(participantes)
}