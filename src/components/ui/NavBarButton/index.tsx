import { Plus } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface ButtonProps {
  name: string;
}

export const NavBarButton: React.FC<ButtonProps> = ({ name }) => {
  return (
    <Button className="bg-green-700">
      {name} <Plus className="ml-2 h-4 w-4" />
    </Button>
  );
}
