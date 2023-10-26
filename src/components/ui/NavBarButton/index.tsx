import { Plus } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button/button";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  name: string;
  path: string;
}

export const NavBarButton: React.FC<ButtonProps> = ({ name, path }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(path);
  }

  return (
    <Button className="bg-green-700" onClick={handleClick}>
      {name} <Plus className="ml-2 h-4 w-4" />
    </Button>
  );
};
