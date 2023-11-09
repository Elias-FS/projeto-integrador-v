import React from "react";
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
import { Button } from "@material-tailwind/react";

interface CardUserProps {
  name: string;
  profissao: string;
  src: string;
  type: string;
}

const CardCourse: React.FC<CardUserProps> = ({
  name,
  profissao,
  src,
  type,
}) => {
  function inscreverCurso() {
    alert("Deseja se inscrever no curso?");
    console.log("logica para inscrever o aluno no curso");
  }

  function fazerCurso() {
    console.log("logica para assistir o curso");
  }

  function validarCurso() {
    alert("Deseja validar o curso?");
    console.log("logica para validar o curso");
  }
  
  return (
    <>
      <Card className="h-auto w-96 overflow-hidden mx-1 mb-8 group hover:bg-gray-100">
        <CardHeader style={{ padding: 0 }}>
          <img
            src={src}
            alt="Imagem do usuário"
            className="aspect-video object-cover"
          />
        </CardHeader>
        <CardContent className="">
          <CardTitle className="mx-2 mt-4">{name}</CardTitle>
          <CardDescription className="mt-2 mx-2">{profissao}</CardDescription>
        </CardContent>
        <CardFooter>
          <Users className="mx-2" size={32} />
          <Separator orientation="vertical" className="h-6 w-0.5 bg-zinc-900" />
          <p className="font-bold text-xl ml-2">1K</p>
          {type === "inscrito" ? (
            // ir para tela de assistir o curso
            <a>
              <Button
                className="bg-green-700 group-hover:opacity-100 opacity-0"
                onClick={fazerCurso}
              >
                {"Iniciar"} <Student className="ml-2 h-4 w-4" />
              </Button>
            </a>
          ) : type === "nao inscrito" ? (
            <Button
              className="bg-green-700 group-hover:opacity-100 opacity-0"
              onClick={inscreverCurso}
            >
              {"Inscrever-se"} <Plus className="ml-2 h-4 w-4" />
            </Button>
          ) : type === "pendente" ? (
            // ir para tela de assistir o curso e validar
            <>
              <a>
                <Button
                  className="bg-green-700 group-hover:opacity-100 opacity-0"
                  onClick={fazerCurso}
                >
                  {"Iniciar"} <Student className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button
                className="bg-yellow-500 group-hover:opacity-100 opacity-0"
                onClick={validarCurso}
              >
                {"Validar"} <Check className="ml-2 h-4 w-4" />
              </Button>
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
