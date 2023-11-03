import axios from "axios";

const API_URL = "http://localhost:3000"

const listarAcademias = () => {
    return axios.get(API_URL + "/academias")
}

const criarAcademias = (
    nome: string,
    descricao: string,
    usuarioId: number,

) => {


    return axios.post(API_URL + "/academias", {

        nome,
        descricao,
        usuarioId
    }, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const AcademiaService = {
    listarAcademias,
    criarAcademias
}

export default AcademiaService