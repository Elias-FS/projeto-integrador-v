import React from "react";
//import { imagemPadrao } from "";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Cards/card";

interface CardUserProps {
  titulo: string;
  descricao: string;
  src: string;
}

const CardCoursePreview: React.FC<CardUserProps> = ({
  titulo,
  descricao,
  src,
}) => {
  return (
    <Card className="h-full w-full overflow-hidden mx-15 shadow-2xl border-gray-400">
      <CardHeader className="p-0">
        <img
          src={
            src !== ""
              ? src
              : "https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png"
          }
          alt="Imagem do usuário"
          className="aspect-video object-cover"
        />
      </CardHeader>
      <CardContent className="h-full w-full border-gray-100">
        <CardTitle className="mx-2 pt-4 font-bold">
          {titulo !== "" ? titulo : "Título"}
        </CardTitle>
        <p className="mt-2 mx-2 text-zinc-600 font-semibold text-xl">
          {descricao !== ""
            ? descricao
            : "Descrição. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lectus volutpat, laoreet neque eget, convallis tortor."}
        </p>
      </CardContent>
    </Card>
  );
};

export default CardCoursePreview;
