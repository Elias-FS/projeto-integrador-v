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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog/alert-dialog";
import UsuarioService from "@/services/usuario.service";

const alterarCargo = async (usuario: any, cargo: number) => {
  await UsuarioService.promoverUsuario(usuario.id, cargo);
 // window.location.reload();
};

const getTextoCargo = (cargoId: number) => {
  console.log(cargoId);
  return cargoId === 1
    ? "Aluno"
    : cargoId === 2
    ? "Instrutor"
    : "Administrador";
};

const PromocaoCargo: React.FC = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    UsuarioService.listarUsuarios().then(
      (response) => {
        console.log(response.data);
        setUsuarios(response.data);
      },
      (error) => {
        const _content = error.response && error.response.data;
        error.message;
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
            <TableCaption>Lista de Alunos, Instrutores e Administradores.</TableCaption>
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
                  <TableCell>{getTextoCargo(usuario.fk_Cargo_id)}</TableCell>
                  <TableCell>
                    <Menubar className="relative inline-block text-left">
                      <MenubarMenu>
                        <MenubarTrigger>Gerenciar Cargo</MenubarTrigger>
                        <MenubarContent>
                          <AlertDialog>
                            <AlertDialogTrigger className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                              Aluno
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Deseja alterar o cargo?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Essa ação irá alterar o cargo do usuário{" "}
                                  {usuario.nome} para o cargo Aluno.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => alterarCargo(usuario, 1)}
                                >
                                  Confirmar
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>

                          <MenubarSeparator />

                          <AlertDialog>
                            <AlertDialogTrigger className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                              Instrutor
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Deseja alterar o cargo?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Essa ação irá alterar o cargo do usuário{" "}
                                  {usuario.nome} para o cargo Instrutor.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => alterarCargo(usuario, 2)}
                                >
                                  Confirmar
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>

                          <MenubarSeparator />

                          <AlertDialog>
                            <AlertDialogTrigger className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                              Administrador
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Deseja alterar o cargo?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Essa ação irá alterar o cargo do usuário{" "}
                                  {usuario.nome} para o cargo Administrador.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => alterarCargo(usuario, 3)}
                                >
                                  Confirmar
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
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
