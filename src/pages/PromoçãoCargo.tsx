import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table/table";
import { Button } from "@material-tailwind/react";

const usuarios = [
  {
    data_nascimento: "1990-01-01",
    id: 1,
    celular: "123456789",
    nome: "João da Silva",
    colaborador: true,
    profissao: "Desenvolvedor",
    email: "joao@example.com",
    cep: "12345-678",
    bairro: "Centro",
    estado: "SP",
    rua: "Rua Principal",
    cargo: "aluno",
  },
  {
    data_nascimento: "1990-01-01",
    id: 1,
    celular: "123456789",
    nome: "Emílio Biasi",
    colaborador: true,
    profissao: "Desenvolvedor",
    email: "emilio@example.com",
    cep: "12345-678",
    bairro: "Centro",
    estado: "SP",
    rua: "Rua Principal",
    cargo: "aluno",
  },
  {
    data_nascimento: "1990-01-01",
    id: 1,
    celular: "123456789",
    nome: "Thiago Lima",
    colaborador: true,
    profissao: "Desenvolvedor",
    email: "thiago@example.com",
    cep: "12345-678",
    bairro: "Centro",
    estado: "SP",
    rua: "Rua Principal",
    cargo: "instrutor",
  },
  {
    data_nascimento: "1990-01-01",
    id: 1,
    celular: "123456789",
    nome: "Kevin Silva",
    colaborador: true,
    profissao: "Desenvolvedor",
    email: "kevin@example.com",
    cep: "12345-678",
    bairro: "Centro",
    estado: "SP",
    rua: "Rua Principal",
    cargo: "administrador",
  },
  {
    data_nascimento: "1990-01-01",
    id: 1,
    celular: "123456789",
    nome: "Gian Dutra",
    colaborador: true,
    profissao: "Desenvolvedor",
    email: "gian@example.com",
    cep: "12345-678",
    bairro: "Centro",
    estado: "SP",
    rua: "Rua Principal",
    cargo: "aluno",
  },
];

const promoverCargo = (nome: string) => {
  console.log("Promovendo cargo de " + nome);
};

const PromocaoCargo: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          <Table>
            <TableCaption>Lista de Alunos e Instrutores</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Promover</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuarios.map((usuario, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{usuario.nome}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>
                    {usuario.cargo == "aluno"
                      ? "Aluno"
                      : usuario.cargo == "instrutor"
                      ? "Instrutor"
                      : usuario.cargo == "administrador"
                      ? "Administrador"
                      : ""}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => promoverCargo(usuario.nome)}
                      className="bg-green-700 w-20 h-8"
                    >
                      Promover
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PromocaoCargo;
