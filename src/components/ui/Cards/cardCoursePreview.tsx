import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Cards/card";
import { LinkedinLogo, Users, TwitterLogo } from "phosphor-react";
import { Separator } from "../Separator";

interface CardUserProps {
  name: string;
  profissao: string;
  src: string;
}

const CardCoursePreview: React.FC<CardUserProps> = ({ name, profissao, src }) => {
  return (
    <>
      <Card className="h-auto w-auto overflow-hidden mx-1 mb-8">
        <CardHeader style={{ padding: 0 }}>
          <img
            src={src}
            alt="Imagem do usuário"
            className="aspect-video object-cover"
          />
        </CardHeader>
        <CardContent className="">
          <CardTitle className="mx-2 mt-4 font-bold">{name}</CardTitle>
          <p className="mt-2 mx-2 font-semibold text-xl">{profissao}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default CardCoursePreview;
