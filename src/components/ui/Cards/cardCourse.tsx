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

const CardCourse: React.FC<CardUserProps> = ({ name, profissao, src }) => {
  return (
    <>
      <Card className="h-auto w-96 overflow-hidden mx-1 mb-8">
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
        </CardFooter>
      </Card>
    </>
  );
};

export default CardCourse;
