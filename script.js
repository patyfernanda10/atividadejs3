//array
let participantes = [
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 0),
},
{
    nome: "Davi Maimoni",
    email:"davi@gmail.com",
    dataInscricao: new Date(2024, 4, 10, 19, 20),
    dataCheckIn: new Date (2024, 4, 12, 8, 30),
},
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 0),
},
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 0),
},
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 0),
},
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 0),
},
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 0),
},
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 0),
},
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 0),
},
{
    nome: "Patricia Fernanda",
    email:"pati@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 18),
},
]

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to
    (participante.dataInscricao)

const dataCheckIn = dayjs(Date.now()).to
(participante.CheckIn)

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

    participantes = [participante, ...participantes]
    atualizarLista(participantes)
}