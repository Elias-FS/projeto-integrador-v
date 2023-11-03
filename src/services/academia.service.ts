import axios from "axios";

const API_URL = "http://localhost:3000"

const listarAcademias = () => {
    return axios.get(API_URL + "/academias")
}

const criarAcademias =  (
    nome:string,
    descricao:string,
    data_criacao: Date

) => {
    return axios.post(API_URL + "/academia/registrar", {
        nome,
        descricao,
        data_criacao: new Date()
    })
}

const AcademiaService = {
    listarAcademias,
    criarAcademias
}

export default AcademiaService