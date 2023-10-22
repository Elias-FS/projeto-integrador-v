import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface CardUserProps {
  name: string;
}

export const PlusButton: React.FC<CardUserProps> = ({ name }) => {
  return (
    <div className="h-auto w-96 overflow-hidden mx-1 mb-8">
      <div className="flex flex-col items-center mt-24">
        <PlusCircle className="h-28 w-28 text-green-700" />
        <Button className="bg-green-700 h-14 w-36 text-lg">{name}</Button>
      </div>
    </div>
  );
}
