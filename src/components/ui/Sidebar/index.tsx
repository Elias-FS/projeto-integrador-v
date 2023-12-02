import { Lifebuoy, Gear } from "phosphor-react";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { Navigation } from "./Navigation";
import { NavItem } from "./Navigation/NavItem";
import * as Collapsible from "@radix-ui/react-collapsible";
import { List } from "phosphor-react";

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col lg:gap-6 overflow-hidden border-b border-zinc-200 bg-white p-4 scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        <Collapsible.Trigger asChild className="lg:hidden">
          <button>
            <List size={32} />
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        asChild
        forceMount
        className="data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
      >
        <div className="lg:flex lg:flex-1 lg:flex-col lg:gap-6">
          <Navigation />

          <div className="mt-auto flex flex-col gap-2 lg:gap-6">
            <nav className="flex flex-col gap-1">
              <NavItem icon={Lifebuoy} title="Suporte" path={""} />
              <NavItem
                icon={Gear}
                title="Configurações"
                path={"/configuracoes"}
              />
            </nav>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
            <Profile />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
