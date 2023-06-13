import React, { useState } from "react";
import { InputText } from "../Input/Input";
import styles from "./LoginForm.module.css";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


export function LoginForm() {
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();


  const click = (e: { preventDefault: () => void; }) => {
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
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1>Entrada</h1>
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
        <button onClick={click} className={styles.loginButton}>
          Entrar
        </button>
        <p>
          <a href="signup">Esqueci Minha Senha</a>
        </p>
        <p>
          Não Possui Conta?<a href="signup">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
}
