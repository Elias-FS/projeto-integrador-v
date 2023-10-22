import { Bell } from "phosphor-react";
import { Button } from "../Button/button";
import { Separator } from "../Separator";
import { Search } from "../Search";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { NavBarButton } from "../NavBarButton";
import { useStore } from "@/zustand-store";
import React, { useEffect, useState } from "react";

export function Navbar() {
  const [ namePage, setNamePage ] = useState("");
  const { userType, namingRole } = useStore((state) => ({
    userType: state.userType,
    namingRole: state.namingRole,
  }));

  React.useEffect(() => {
    namingRole();
  }, [namingRole]);
  console.log(userType);

  useEffect(() => {
    namingRole();
    ChangeNamePage();
  }, [namingRole]);

  function ChangeNamePage() {
    const pathDaPagina = window.location.pathname;
    let namePage = "";

    switch (pathDaPagina) {
      case "/meu-aprendizado":
        namePage = "Meu Aprendizado";
        break;
      case "/cursos":
        namePage = "Cursos";
        break;
      case "/oficina-curso":
        namePage = "Oficina Academia";
        break;
      case "/oficina-academia":
        namePage = "Oficina Curso";
        break;
      case "/minhas-aulas":
        namePage = "Minhas Aulas";
        break;
      case "/cursos-pendentes":
        namePage = "Cursos Pendentes";
        break;
      case "/academias":
        namePage = "Academias";
        break;
      case "/about-us":
        namePage = "About Us";
        break;
      default:
        namePage = "Página Desconhecida";
    }

    setNamePage(namePage);
  }

  return (
    <div className="min-h-fit flex flex-col">
      <div className="pl-4 pr-3 py-4 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">DPASCHOAL / {namePage}</h1>

        <div className="flex items-center gap-3">
          {userType === "Admin" ? (
            <>
              <NavBarButton name={"Criar Curso"} path={"/oficina-curso"} />
              <NavBarButton name={"Criar Academia"} path={"/oficina-academia"} />
            </>
          ) : (
            <></>
          )}
          {userType === "Instrutor" ? (
            <>
              <NavBarButton name={"Criar Curso"} path={"/oficina-curso"} />
            </>
          ) : (
            <></>
          )}
          <Search />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Academias" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Opções</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Bell className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
