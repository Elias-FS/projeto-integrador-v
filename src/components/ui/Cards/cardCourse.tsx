import React, { useEffect, useState } from "react";
import CursoService from "@/services/curso.service";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Cards/card";
import { Check, Plus, Student, Users } from "phosphor-react";
import { Separator } from "../Separator";
import { Link } from "react-router-dom";
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
import { Button } from "../Button/button";
import { Usuario } from "@/models/usuario";
import { Curso } from "@/models/curso";

interface CardUserProps {
  titulo: string;
  descricao: string;
  capa: string;
  type: string;
  idCurso?: string;
}

const CardCourse: React.FC<CardUserProps> = ({
  titulo,
  descricao,
  capa,
  type,
  idCurso,
}) => {
  const usuario = Usuario.fromJson(
    JSON.parse(localStorage.getItem("usuario")!)
  );
  
  function inscreverCurso() {
    // vincular curso ao aluno
    console.log("logica para inscrever o aluno no curso");
    // atualizar a página após update
  }

  function fazerCurso() {
    console.log("logica para assistir o curso");
  }

  const validarCurso = () => {
    CursoService.atualizarCurso(idCurso, true);
    window.location.reload();
  };

  return (
    <>
      <Card className="h-auto w-80 overflow-hidden mx-1 mb-8 group hover:bg-gray-100 lg:h-auto lg:w-96">
        <CardHeader style={{ padding: 0 }}>
          <img
            src={capa}
            alt="Imagem do usuário"
            className="aspect-video object-cover"
          />
        </CardHeader>
        <CardContent className="">
          <CardTitle className="mx-2 mt-4">{titulo}</CardTitle>
          <CardDescription className="mt-2 mx-2">{descricao}</CardDescription>
        </CardContent>
        <CardFooter>
          <Users className="mx-2" size={32} />
          <Separator orientation="vertical" className="h-6 w-0.5 bg-zinc-900" />
          <p className="font-bold text-xl ml-2 pr-24 lg:pr-36">1K</p>
          {type === "inscrito" ? (
            // ir para tela de assistir o curso
            <Link to={"/visualizacao-curso"}>
              <Button
                className="bg-green-700 group-hover:opacity-100 opacity-0"
                onClick={fazerCurso}
              >
                {"Iniciar"} <Student className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : type === "nao inscrito" ? (
            <>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    className="bg-green-700 group-hover:opacity-100 opacity-0 text-white"
                    variant="outline"
                  >
                    Inscrever-se <Plus size={30} className="ml-2 h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Deseja se inscrever no curso?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Essa ação irá víncular o curso selecionado aos cursos que
                      você já é inscrito. O curso ficará disponível na aba "Meu
                      Aprendizado".
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={inscreverCurso}>
                      Inscrever-se
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ) : type === "pendente" ? (
            // ir para tela de assistir o curso e validar
            <>
              <Link to={"/visualizacao-curso"}>
                <Button
                  className="bg-green-700 group-hover:opacity-100 opacity-0"
                  onClick={fazerCurso}
                >
                  {"Iniciar"} <Student className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    className="bg-yellow-500 group-hover:opacity-100 opacity-0 text-white"
                    variant="outline"
                  >
                    Validar <Check size={30} className="ml-2 h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Deseja validar o curso?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Essa ação irá validar o curso selecionado. O curso ficará
                      disponível para os Alunos.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={validarCurso}>
                      Validar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ) : (
            ""
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default CardCourse;
