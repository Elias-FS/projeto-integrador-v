import { Slide } from "@/models/slide";
import { Button } from "@material-tailwind/react";
import { Label } from "@radix-ui/react-label";

interface ViewEstruturaQuestoesProps {
  slide: Slide;
}

export function ViewEstruturaME({ slide }: ViewEstruturaQuestoesProps) {
  return (
    <div className="text-left w-3/4 flex flex-col">
      <Label>{slide.question}</Label>
      <div className="flex flex-col gap-6 mb-12">
        {slide.options?.map((option, index) => (
          <Button
            className="block font-inherit text-inherit text-2xl border-2 border-dark bg-dark py-3 px-6 cursor-pointer rounded-full transition duration-300 hover:bg-darkest hover:transform-hover disabled:hover:cursor-not-allowed disabled:cursor-not-allowed"
            key={option}
            // disabled={hasAnswered}
            // onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
