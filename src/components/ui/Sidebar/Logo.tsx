import React from "react";
import { useStore } from "@/zustand-store"; // Substitua com o caminho correto

export function Logo() {
  const { userType, namingRole } = useStore((state) => ({
    path: state.path,
    userType: state.userType,
    namingRole: state.namingRole,
  }));

  React.useEffect(() => {
    namingRole(); // Chama a função namingRole quando o componente monta
  }, [namingRole]);


  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100 w-24">
      <img src="https://www.grupodpaschoal.com.br/wp-content/uploads/2021/01/logo1.png" />
      <span className="sr-only lg:not-sr-only">{userType}</span>
    </strong>
  );
}
