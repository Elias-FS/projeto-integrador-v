import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/card";
import { LinkedinLogo, GithubLogo, TwitterLogo } from "phosphor-react";

interface CardUserProps {
  name: string;
  profissao: string;
  src: string;
}

const CardUser: React.FC<CardUserProps> = ({ name, profissao, src }) => {
  return (
    <>
      <Card className="h-auto w-72">
        <CardHeader>
          <img
            src={src}
            alt="Imagem do usuário"
            className="rounded-xl"
          />
        </CardHeader>
        <CardContent className="">
          <CardTitle className="text-center">{name}</CardTitle>
          <CardDescription className="text-center mt-2 ">{profissao}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center">
          <LinkedinLogo className="mx-2 cursor-pointer" size={32} />
          <GithubLogo className="mx-2 cursor-pointer" size={32} />
          <TwitterLogo className="mx-2 cursor-pointer" size={32} />
        </CardFooter>
      </Card>
    </>
  );
};

export default CardUser;
