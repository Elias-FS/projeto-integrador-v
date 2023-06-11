import axios from "axios"


const API_URL = "http://localhost:3000/api/"

const getAlunos = () => {
    return axios.get(API_URL + "alunos")
}