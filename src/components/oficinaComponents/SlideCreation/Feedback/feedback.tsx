import { Slide } from "@/models/slide";

interface FeedbackProps {
  slideOpened: Slide;
  slideList: Slide[];
}

export function Feedback({}: FeedbackProps) {
  return (
    <div className="w-1/2 h-96 bg-gray-300 border border-gray-400 rounded-lg flex items-center justify-center">
      TEMPLATE FEEDBACK
    </div>
  );
}
