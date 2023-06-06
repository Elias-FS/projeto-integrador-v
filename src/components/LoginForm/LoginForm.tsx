import React, { useState } from "react";
import { InputText } from "../Input/Input";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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
        <button className={styles.loginButton}>Entrar</button>
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
