import { useState } from "react";
import { InputText } from "../Input/Input";
import styles from "./SignUpForm.module.css";
import { MenuItem } from "../DropBox/MenuItem";
import { DropBox } from "../DropBox/DropBox";
import api from "../../services/api";
import axios from "axios";

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
    { value: "acre", label: "Acre", uf: "AC" },
    { value: "alagoas", label: "Alagoas", uf: "AL" },
    { value: "amapa", label: "Amapá", uf: "AP" },
    { value: "amazonas", label: "Amazonas", uf: "AM" },
    { value: "bahia", label: "Bahia", uf: "BA" },
    { value: "ceara", label: "Ceará", uf: "CE" },
    { value: "distrito_federal", label: "Distrito Federal", uf: "DF" },
    { value: "espirito_santo", label: "Espírito Santo", uf: "ES" },
    { value: "goias", label: "Goiás", uf: "GO" },
    { value: "maranhao", label: "Maranhão", uf: "MA" },
    { value: "mato_grosso", label: "Mato Grosso", uf: "MT" },
    { value: "mato_grosso_do_sul", label: "Mato Grosso do Sul", uf: "MS" },
    { value: "minas_gerais", label: "Minas Gerais", uf: "MG" },
    { value: "para", label: "Pará", uf: "PA" },
    { value: "paraiba", label: "Paraíba", uf: "PB" },
    { value: "parana", label: "Paraná", uf: "PR" },
    { value: "pernambuco", label: "Pernambuco", uf: "PE" },
    { value: "piaui", label: "Piauí", uf: "PI" },
    { value: "rio_de_janeiro", label: "Rio de Janeiro", uf: "RJ" },
    { value: "rio_grande_do_norte", label: "Rio Grande do Norte", uf: "RN" },
    { value: "rio_grande_do_sul", label: "Rio Grande do Sul", uf: "RS" },
    { value: "rondonia", label: "Rondônia", uf: "RO" },
    { value: "roraima", label: "Roraima", uf: "RR" },
    { value: "santa_catarina", label: "Santa Catarina", uf: "SC" },
    { value: "sao_paulo", label: "São Paulo", uf: "SP" },
    { value: "sergipe", label: "Sergipe", uf: "SE" },
    { value: "tocantins", label: "Tocantins", uf: "TO" },
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

  // Function to fetch address details using VIACEP API
  const fetchAddressDetails = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      // Update the state with the fetched address details
      setBairro(data.bairro);
      setRua(data.logradouro);

      estados.map((option) => {
        if (option.uf == data.uf) {
          setEstadoSelecionado(option.value)
          console.log("data " , data.uf)
          console.log("option " , option.uf)
        }

      });

      

      // You can set other relevant fields here as well
    } catch (error) {
      console.error("Error fetching address:", error);
      // Handle the error as needed
    }
  };

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
              label="Data de Nascimento *"
              placeholder="Digite sua Data de Nascimento"
              valor={data}
              type={"text"}
              aoAlterado={(valorData: string) => setData(valorData)}
            />
          </div>
          <div></div>
          <div className={styles.item4}>
            <InputText
              obrigatorio={true}
              label="CEP *"
              placeholder="Digite seu CEP"
              valor={cep}
              type={"text"}
              aoAlterado={async (valorCep: string) => {
                // Update the CEP state
                setCep(valorCep);

                // Call fetchAddressDetails if the entered value is a valid CEP
                if (/^\d{5}-?\d{3}$/.test(valorCep)) {
                  await fetchAddressDetails(valorCep);
                }
              }}
            />
            <DropBox
              valor={estadoSelecionado}
              aoAlterado={(est: string) => setEstadoSelecionado(est)}
              label="Estado *"
              values={estados.map((option) => (
                <MenuItem name={option.value} value={option.label} />
              ))}
            ></DropBox>
            <InputText
              obrigatorio={true}
              label="Bairro *"
              placeholder="Digite seu Bairro"
              valor={bairro}
              type={"text"}
              aoAlterado={(valorBairro: string) => setBairro(valorBairro)}
            />
            <InputText
              obrigatorio={true}
              label="Rua *"
              placeholder="Digite sua Rua"
              valor={rua}
              type={"text"}
              aoAlterado={(valorRua: string) => setRua(valorRua)}
            />

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
