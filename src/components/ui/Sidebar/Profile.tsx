import { SignOut } from "phosphor-react";
import { Button } from "../Button/button";
import { useEffect } from "react";
import AuthService from "@/services/auth.service";
import { Usuario } from "@/models/usuario";

// export interface ProfileProps {}

// const usuario = Usuario.fromJson(JSON.parse(localStorage.getItem("usuario")!))

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/giandutra.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col">
        <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          {/* {localStorage.getItem("usuario")} */}
          Gian Dutra
        </span>
        <span className="block text-sm text-zinc-500 dark:text-zinc-400">
          giandutra@hotmail.com.br
        </span>
      </div>
      <Button variant="ghost" className="ml-auto">
        <SignOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  );
}
