import { Card, Input, Button, Typography } from "@material-tailwind/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import React, { useEffect, useState } from "react";
import DropZone from "../dropZone/dropZone";
import { Curso } from "@/models/curso";
import { useStore } from "@/zustand-store";
import { Link } from "react-router-dom";
import AcademiaService from "@/services/academia.service";
import CursoService from "@/services/curso.service";
import { Usuario } from "@/models/usuario";
import { Academia } from "@/models/academia";

interface FormsCriaCursoProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  setTypedTitle: (title: string) => void;
  setTypedDescription: (title: string) => void;
  selectedImage: File;
}

export function FormsCriaCurso({
  setSelectedImage,
  setTypedTitle,
  setTypedDescription,
  selectedImage,
}: FormsCriaCursoProps) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [academiaSelecionada, setAcademiaSelecionada] = useState<Academia>();
  const { curso, saveInformations } = useStore((state) => ({
    curso: state.curso,
    saveInformations: state.saveInformations,
  }));
  const [academias, setAcademias] = useState<Academia[]>([]);

  useEffect(() => {
    AcademiaService.listarAcademias().then(
      (response) => {
        setAcademias(response.data);
      },
      (error) => {
        const _content = error.response && error.response.data;
        error.message;
        error.toString();
      }
    );
  }, []);

  const handleInputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = e.target.value;
    setInputTitle(valorDigitado);
    setTypedTitle(valorDigitado);
  };

  const handleInputDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valorDigitado = e.target.value;
    setInputDescription(valorDigitado);
    setTypedDescription(valorDigitado);
  };

  const handleSelectChange = (valor: string) => {
    academias.map((acad) => {
      if (acad.nome == valor) {
        setAcademiaSelecionada(acad);
      }
    });
  };

  async function salvarCurso() {
    const usuario = Usuario.fromJson(
      JSON.parse(localStorage.getItem("usuario")!)
    );

    if (academiaSelecionada != undefined) {
      const newCurso = await CursoService.criarCurso(
        inputTitle,
        inputDescription,
        usuario.id,
        academiaSelecionada?.id,
        selectedImage
      );
      console.log("newCurso: ", newCurso.data)
      saveInformations(Curso.fromJson(newCurso.data));
    }
  }

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4">Cadastrar Curso</Typography>
      <Typography className="mt-1 font-normal">
        Preencha todas informações para dar início a criação do seu curso.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Título:
          </Typography>
          <Input
            value={inputTitle}
            onChange={handleInputTitleChange}
            size="lg"
            placeholder="Título do Curso..."
            className="border border-t border-opacity-50 rounded focus:border-t focus:border-opacity-50 focus:rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Imagem do Curso:
          </Typography>
          <DropZone setSelectedImage={setSelectedImage} />
          <Typography variant="h6" className="-mb-3">
            Descrição:
          </Typography>
          <Input
            value={inputDescription}
            onChange={handleInputDescriptionChange}
            size="lg"
            placeholder="Descrição do curso..."
            className="border border-t border-opacity-50 rounded focus:border-t focus:border-opacity-50 focus:rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" className="-mb-3">
            Academia:
          </Typography>
          <Select
            onValueChange={handleSelectChange}
            value={academiaSelecionada?.nome}
          >
            <SelectTrigger className="w-[385px]  border-gray-800">
              <SelectValue placeholder="Academias" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Opções</SelectLabel>
                {
                  academias.map((academia) => (
                    <SelectItem value={academia.nome}>
                      {academia.nome}
                    </SelectItem>
                  )) //map de academias
                }
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {!academiaSelecionada ||
        !inputDescription ||
        !inputTitle ||
        !selectedImage ? (
          <Button className="mt-6 bg-green-700 text-lg h-11" fullWidth disabled>
            Iniciar Criação
          </Button>
        ) : (
          <Link to="/criacao-curso">
            <Button
              onClick={salvarCurso}
              className="mt-6 bg-green-700 text-lg h-11"
              fullWidth
            >
              Iniciar Criação
            </Button>
          </Link>
        )}
      </form>
    </Card>
  );
}
