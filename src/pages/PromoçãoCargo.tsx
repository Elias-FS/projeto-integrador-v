import React, { useEffect, useState } from "react";
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
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/MenuBar/menubar";
import UsuarioService from "@/services/usuario.service";

const alterarCargo = async (usuario: any, cargo:number) => {
  alert("Ajustando cardo de " + usuario.nome + " para " + getTextoCargo(usuario.cargoId) + ".");

  console.log(usuario.cargo)
  
  await UsuarioService.promoverUsuario(usuario.id, cargo);

  window.location.reload();
};

const getTextoCargo = (cargoId: number) => {
  console.log(cargoId)
  return cargoId === 1 ? "Aluno" : cargoId === 2 ? "Instrutor" : "Administrador"
}

const PromocaoCargo: React.FC = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    UsuarioService.listarUsuarios().then(
      (response) => {
        console.log(response.data);
        setUsuarios(response.data);
        
      },
      (error) => {
        const _content =
          (error.response && error.response.data) 
          error.message 
          error.toString();
      }
    );
  }, []);

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
                    {getTextoCargo(usuario.cargoId)}
                  </TableCell>
                  <TableCell>
                    <Menubar className="relative inline-block text-left">
                      <MenubarMenu>
                        <MenubarTrigger>Definir Cargo</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem
                            onClick={() => alterarCargo(usuario, 1)}
                          >
                            Aluno
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem
                            onClick={() =>
                              alterarCargo(usuario, 2)
                            }
                          >
                            Instrutor
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem
                            onClick={() =>
                              alterarCargo(usuario, 3)
                            }
                          >
                            Administrador
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
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
