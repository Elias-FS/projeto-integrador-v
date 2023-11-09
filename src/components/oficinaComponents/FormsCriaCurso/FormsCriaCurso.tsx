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
import React, { useState } from "react";
import DropZone from "../DropZone/dropZone";
import { Curso } from "@/models/curso";
import { v4 as uuidv4 } from "uuid";

interface FormsCriaCursoProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  setTypedTitle: (title: string) => void;
  setTypedDescription: (title: string) => void;
  selectedImage: string;
}

export function FormsCriaCurso({
  setSelectedImage,
  setTypedTitle,
  setTypedDescription,
  selectedImage,
}: FormsCriaCursoProps) {
  const [inputTitle, setInputTitle] = useState(""); // Estado para o título
  const [inputDescription, setInputDescription] = useState(""); // Estado para a descrição

  const academias = [
    {
      name: "Academia A",
      profissao: "Treinamento físico e bem-estar",
    },
    {
      name: "Academia B",
      profissao: "Condicionamento físico e musculação",
    },
    {
      name: "Academia C",
      profissao: "Aulas de Yoga e meditação",
    },
    {
      name: "Academia D",
      profissao: "Treinamento cardiovascular",
    },
    {
      name: "Academia E",
      profissao: "Treinamento de levantamento de peso",
    },
  ];

  const handleInputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = e.target.value;
    setInputTitle(valorDigitado);
    setTypedTitle(valorDigitado);
    console.log("Valor digitado: ", valorDigitado);
  };

  const handleInputDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valorDigitado = e.target.value;
    setInputDescription(valorDigitado);
    setTypedDescription(valorDigitado);
    console.log("Valor digitado: ", valorDigitado);
  };

  const saveInformations = () => {
    //lógica para salvar
    const curso = new Curso(
      Date(),
      uuidv4(),
      inputTitle,
      selectedImage,
      inputDescription,
      "academia",
      []
    );
    console.log(curso);
  };

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
          <Select>
            <SelectTrigger className="w-[385px]  border-gray-800">
              <SelectValue placeholder="Academias" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Opções</SelectLabel>
                {
                  academias.map((academia) => (
                    <SelectItem value={academia.name}>
                      {academia.name}
                    </SelectItem>
                  )) //map de academias
                }
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <a href="/criacao-curso">
          <Button
            onClick={saveInformations}
            className="mt-6 bg-green-700 text-lg h-11"
            fullWidth
          >
            Iniciar Criação
          </Button>
        </a>
      </form>
    </Card>
  );
}
