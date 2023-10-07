class Usuario {
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
}
