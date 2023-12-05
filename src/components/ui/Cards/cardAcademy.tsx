import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Cards/card";
import { Separator } from "../Separator";
import { Users } from "phosphor-react";
import axios from "axios";


interface CardUserProps {
  titulo: string;
  descricao: string;
  capa: string;
}

const CardAcademy: React.FC<CardUserProps> = ({
  titulo,
  descricao,
  capa,
}) => {

  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    handleFileChange();
  }, []);

  const handleFileChange = async () => {
    const response = await axios.get(capa, { responseType: "arraybuffer" });

    let binary = "";
    const binaryString = new Uint8Array(response.data);
    const len = binaryString.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(binaryString[i]);
    }

    setImageSrc(binary);
  };

  
  return (
    <>
      <Card className="h-auto w-96 overflow-hidden mx-1 mb-8 group hover:bg-gray-100">
        <CardHeader style={{ padding: 0 }}>
          <img
            src={imageSrc}
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
          <p className="font-bold text-xl ml-2">1K</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardAcademy;
