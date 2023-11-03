import axios from "axios"


const API_URL = "http://localhost:3000/"

const getAlunos = () => {
    return axios.get(API_URL + "login")
}

export default function authHeader() {

  
// Verifique se o localStorage é suportado pelo navegador
 if (typeof localStorage !== 'undefined') {
    // Tente obter um item do localStorage usando a chave 'meuItem'
    const usuario = localStorage.getItem('usuario');
  
    // Verifique se o item foi encontrado no localStorage
    if (usuario !== null) {
      // Converta o valor de volta para o tipo desejado (por exemplo, JSON)
      const valorParseado = JSON.parse(usuario);
      // Agora você pode usar o valor recuperado
      console.log(valorParseado);
    } else {
      // O item não foi encontrado no localStorage
      
      console.log('Item não encontrado no localStorage');
    }
  } else {
    // O localStorage não é suportado no navegador
    console.log('localStorage não suportado pelo navegador');
  }
}

