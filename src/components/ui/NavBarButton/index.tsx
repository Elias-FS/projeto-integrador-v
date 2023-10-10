import { Plus } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function NavBarButton() {
  return (
    <Button className="bg-green-700">
      Criar Curso <Plus className="ml-2 h-4 w-4" />
    </Button>
  );
}
