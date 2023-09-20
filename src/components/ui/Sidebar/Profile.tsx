import { SignOut } from "phosphor-react";
import { Button } from "../Button/button";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileProps {}

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
