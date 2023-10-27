import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Cards/card";

interface CardUserProps {
  name: string;
  profissao: string;
  src: string;
}

const CardCoursePreview: React.FC<CardUserProps> = ({ name, profissao, src }) => {
  return (
    <>
      <Card className="h-auto w-auto overflow-hidden mx-15 mb-8">
        <CardHeader style={{ padding: 0 }}>
          <img
            src={src}
            alt="Imagem do usuário"
            className="aspect-video object-cover"
          />
        </CardHeader>
        <CardContent className="pt-5 pb-10">
          <CardTitle className="mx-2 mt-4 font-bold">{name}</CardTitle>
          <p className="mt-2 mx-2 text-zinc-600 font-semibold text-xl">{profissao}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default CardCoursePreview;
