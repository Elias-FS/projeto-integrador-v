import React, { useState } from "react";
import { InputText } from "../Input/Input";
import styles from "./LoginForm.module.css";

export function TextBox() {
  const [senha, setSenha] = useState<string>("");

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1>Entrada</h1>
        <InputText
          obrigatorio={true}
          label="E-mail:"
          placeholder="Password"
          valor={"exemplo@hotmail.com"}
          type={"text"}
          aoAlterado={(valorSenha: string) => setSenha(valorSenha)}
        />
        <InputText
          obrigatorio={true}
          label="Senha:"
          placeholder="Password"
          valor={"senha"}
          type={"password"}
          aoAlterado={(valorSenha: string) => setSenha(valorSenha)}
        />
        <button className={styles.loginButton}>Entrar</button>
        <p>
          Não Possui Conta?<a href="#">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
}
