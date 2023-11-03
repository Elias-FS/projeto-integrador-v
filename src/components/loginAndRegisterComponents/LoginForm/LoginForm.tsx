import React, { useState } from "react";
import { InputText } from "../Input/Input";
import styles from "./LoginForm.module.css";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button/button";
import authHeader from "@/services/auth.service";

export function LoginForm() {
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const auth = authHeader

  const verificarLogin = (usuarioTipo:String) => {
      if(usuarioTipo == "adminstrador") {
          navigate("/adm")
      }
      else if(usuarioTipo == "aluno") {
        navigate("/aluno")
      }
      else if(usuarioTipo == "instrutor") {
        navigate("/instrutor")
      }
  }


  const click = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const var1 = api
      .post("login", {
        email: email,
        senha: senha,
      })
    
      .catch((err: string) => {
        console.error("ops! ocorreu um erro " + err);
      });

    if (email == "" || senha == "") {
      alert("Preencha os campos!!");
    } else {
      navigate("/aluno");
    }

    console.log(auth)
    
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1 className="text-center justify-center flex text-gray-900 font-semibold text-4xl pb-3">
          Entrada
        </h1>

        <InputText
          obrigatorio={true}
          label="E-mail"
          placeholder="Digite seu E-mail"
          valor={email}
          type={"email"}
          aoAlterado={(valorEmail: string) => setEmail(valorEmail)}
        />
        <InputText
          obrigatorio={true}
          label="Senha"
          placeholder="Digite sua Senha"
          valor={senha}
          type={"password"}
          aoAlterado={(valorSenha: string) => setSenha(valorSenha)}
        />
        <Button
          onClick={click}
          className="mt-8 w-full h-12 rounded-lg border-0 bg-blue-500 text-white hover:bg-blue-600"
        >
          Entrar
        </Button>
        <p>
          <a
            href="signup"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Esqueci Minha Senha
          </a>
        </p>
        <p>
          Não Possui Conta?
          <a
            href="signup"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Cadastre-se
          </a>
        </p>
      </form>
    </div>
  );
}
