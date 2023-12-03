import { UsuarioTipo } from "@/enums/usuario_tipo";
import moment from "moment";

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

    const usuario = new Usuario(
      moment.utc(data_nascimento).toDate(),
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
      cargo == 1
        ? UsuarioTipo.aluno
        : cargo == 2
        ? UsuarioTipo.instrutor
        : UsuarioTipo.administrador
    );

    return usuario;
  }
}
