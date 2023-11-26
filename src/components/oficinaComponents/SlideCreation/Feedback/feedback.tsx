import { Slide } from "@/models/slide";
import { Input } from "@material-tailwind/react";

interface FeedbackProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function Feedback({
  slideOpened,
  setSlideList,
  slideList,
}: FeedbackProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        TEMPLATE FEEDBACK {slideOpened + 1}
        <Input
          id="Feedback"
          placeholder="Feedback"
          value={slideList[slideOpened]?.texto}
          onChange={(e) => {
            const updatedValue = e.target.value;
            setSlideList((prevSlideList) =>
              prevSlideList.map((slide) => {
                if (slide.posicao === slideOpened) {
                  return { ...slide, texto: updatedValue };
                }
                return slide;
              })
            );
          }}
        />
      </div>
      <div />
    </div>
  );
}
