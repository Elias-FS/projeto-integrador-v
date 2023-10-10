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
} from "@/components/ui/Select"
import { NavBarButton } from "../NavBarButton";

export function Navbar() {
  return (
    <div className="min-h-fit flex flex-col">
      <div className="pl-4 pr-3 py-4 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">DPASCHOAL / Página Atual</h1>

        <div className="flex items-center gap-3">
          <NavBarButton/>
          <Search/>
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
