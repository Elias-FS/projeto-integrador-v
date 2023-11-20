import { Slide } from "@/models/slide";

interface ViewFeedbackProps {
  slide: Slide;
}

export function ViewFeedback({ slide }: ViewFeedbackProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      FEEDBACK
    </div>
  );
}
