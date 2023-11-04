import { Slide } from "@/models/slide";
import { Input } from "@material-tailwind/react";

interface FeedbackProps {
  slideOpened: number;
}

export function Feedback({ slideOpened }: FeedbackProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        TEMPLATE FEEDBACK {slideOpened + 1}
        <Input
          placeholder="Feedback ou conteúdo:"
          className="w-full mb-4 rounded-full"
        />
      </div>
      <div />
    </div>
  );
}
