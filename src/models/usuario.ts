import { UsuarioTipo } from "@/enums/usuario_tipo";

export class Usuario {
  data_nascimento: Date;
  id: number;
  celular: string;
  nome: string;
  colaborador: boolean;
  profissao: string;
  email: string;
  cep: string;
  bairro: string;
  estado: string;
  rua: string;
  cargo: UsuarioTipo;

  constructor(
    data_nascimento: Date,
    id: number,
    celular: string,
    nome: string,
    colaborador: boolean,
    profissao: string,
    email: string,
    cep: string,
    bairro: string,
    estado: string,
    rua: string,
    cargo: UsuarioTipo
  ) {
    this.data_nascimento = data_nascimento;
    this.id = id;
    this.celular = celular;
    this.nome = nome;
    this.colaborador = colaborador;
    this.profissao = profissao;
    this.email = email;
    this.cep = cep;
    this.bairro = bairro;
    this.estado = estado;
    this.rua = rua;
    this.cargo = cargo;
  }

  static fromJson(json: any): Usuario {
    console.log(json)
    const {
      data_nascimento,
      id,
      celular,
      nome,
      colaborador,
      profissao,
      email,
      cep,
      bairro,
      estado,
      rua,
      cargo,
    } = json;

    // Você pode adicionar validações ou tratamentos adicionais aqui, se necessário

    const usuario = new Usuario(
      new Date(data_nascimento),
      id,
      celular,
      nome,
      colaborador,
      profissao,
      email,
      cep,
      bairro,
      estado,
      rua,
      cargo as UsuarioTipo // Certifique-se de tratar adequadamente o tipo do cargo
    );

    return usuario;
  }
}
