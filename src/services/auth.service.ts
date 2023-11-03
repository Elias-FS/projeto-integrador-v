import axios from "axios"


const API_URL = "http://localhost:3000/"

const login = async (email:string, senha:string) => {

  const response = await axios.post(API_URL + "auth", {
    email,
    senha,
  })

  return response;
}

const AuthService = {
  login,
}

export default AuthService

