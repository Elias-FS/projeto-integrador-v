import React, { useState } from "react";
import { InputText } from "../Input/Input";
import styles from "./SignUpForm.module.css";
import { MenuItem } from "../DropBox/MenuItem";
import { DropBox } from "../DropBox/DropBox";
import api from "../../services/api";

export function SignUpForm() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [celular, setCelular] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [rua, setRua] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>("");
  const [colaboradorSelecionado, setColaboradorSelecionado] =
    useState<string>("");
  const [profissaoSelecionado, setProfissaoSelecionado] = useState<string>("");

  const estados = [
    { value: "acre", label: "Acre" },
    { value: "alagoas", label: "Alagoas" },
    { value: "amapa", label: "Amapá" },
    { value: "amazonas", label: "Amazonas" },
    { value: "bahia", label: "Bahia" },
    { value: "ceara", label: "Ceará" },
    { value: "distrito_federal", label: "Distrito Federal" },
    { value: "espirito_santo", label: "Espírito Santo" },
    { value: "goias", label: "Goiás" },
    { value: "maranhao", label: "Maranhão" },
    { value: "mato_grosso", label: "Mato Grosso" },
    { value: "mato_grosso_do_sul", label: "Mato Grosso do Sul" },
    { value: "minas_gerais", label: "Minas Gerais" },
    { value: "para", label: "Pará" },
    { value: "paraiba", label: "Paraíba" },
    { value: "parana", label: "Paraná" },
    { value: "pernambuco", label: "Pernambuco" },
    { value: "piaui", label: "Piauí" },
    { value: "rio_de_janeiro", label: "Rio de Janeiro" },
    { value: "rio_grande_do_norte", label: "Rio Grande do Norte" },
    { value: "rio_grande_do_sul", label: "Rio Grande do Sul" },
    { value: "rondonia", label: "Rondônia" },
    { value: "roraima", label: "Roraima" },
    { value: "santa_catarina", label: "Santa Catarina" },
    { value: "sao_paulo", label: "São Paulo" },
    { value: "sergipe", label: "Sergipe" },
    { value: "tocantins", label: "Tocantins" },
  ];

  const colaborador = [
    { value: "sim", label: "Sim" },
    { value: "nao", label: "Não" },
  ];

  const profissao = [
    { value: "mecanico", label: "Mecânico" },
    { value: "borracheiro", label: "Borracheiro" },
    { value: "funileiro", label: "Funileiro" },
  ];

  const click = () => {

    api
      .post("alunos", {
        nome_completo: nome,
        email: email,
        senha: senha,
        celular: celular,
        cep: cep,
        bairro: bairro,
        rua: rua,
        data_nasc: data,
        estado: estadoSelecionado,
        empregado: colaboradorSelecionado,
        area_profissao: profissaoSelecionado,
      })
      .catch((err: string) => {
        console.error("ops! ocorreu um erro " + err);
      });
  };

  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm}>
        <div className={styles.grid_container}>
          <div className={styles.item1}>
            <h1>Cadastro</h1>
          </div>
          <div className={styles.item3}>
            <InputText
              obrigatorio={true}
              label="Nome Completo *"
              placeholder="Digite seu Nome"
              valor={nome}
              type={"text"}
              aoAlterado={(valorNome: string) => setNome(valorNome)}
            />
            <InputText
              obrigatorio={true}
              label="E-mail *"
              placeholder="Digite seu E-mail"
              valor={email}
              type={"email"}
              aoAlterado={(valorEmail: string) => setEmail(valorEmail)}
            />
            <InputText
              obrigatorio={true}
              label="Senha *"
              placeholder="Digite sua Senha"
              valor={senha}
              type={"password"}
              aoAlterado={(valorSenha: string) => setSenha(valorSenha)}
            />
            <InputText
              obrigatorio={true}
              label="Celular *"
              placeholder="Digite seu Número"
              valor={celular}
              type={"tel"}
              aoAlterado={(valorCeluar: string) => setCelular(valorCeluar)}
            />
            <InputText
              obrigatorio={true}
              label="CEP *"
              placeholder="Digite seu CEP"
              valor={cep}
              type={"text"}
              aoAlterado={(valorCep: string) => setCep(valorCep)}
            />
            <InputText
              obrigatorio={true}
              label="Bairro *"
              placeholder="Digite seu Bairro"
              valor={bairro}
              type={"text"}
              aoAlterado={(valorBairro: string) => setBairro(valorBairro)}
            />
          </div>
          <div className={styles.item4}>
            <InputText
              obrigatorio={true}
              label="Rua *"
              placeholder="Digite sua Rua"
              valor={rua}
              type={"text"}
              aoAlterado={(valorRua: string) => setRua(valorRua)}
            />
            <InputText
              obrigatorio={true}
              label="Data de Nascimento *"
              placeholder="Digite sua Data de Nascimento"
              valor={data}
              type={"text"}
              aoAlterado={(valorData: string) => setData(valorData)}
            />
            <DropBox
              valor={estadoSelecionado}
              aoAlterado={(est: string) => setEstadoSelecionado(est)}
              label="Estado *"
              values={estados.map((option) => (
                <MenuItem name={option.value} value={option.label} />
              ))}
            ></DropBox>

            <DropBox
              valor={colaboradorSelecionado}
              aoAlterado={(col: string) => setColaboradorSelecionado(col)}
              label="Colaborador *"
              values={colaborador.map((option) => (
                <MenuItem name={option.value} value={option.label} />
              ))}
            ></DropBox>
            <DropBox
              valor={profissaoSelecionado}
              aoAlterado={(pro: string) => setProfissaoSelecionado(pro)}
              label="Profissão *"
              values={profissao.map((option) => (
                <MenuItem name={option.value} value={option.label} />
              ))}
            ></DropBox>
            <p className={styles.helptext}>" * " - Campos Obrigatórios</p>
            <button onClick={click} className={styles.signupButton}>
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
