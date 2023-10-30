interface SlideCreationProps {
  slideOpened: string;
}

export function SlideCreation({ slideOpened }: SlideCreationProps) {
  return (
    <div className="w-1/2 h-96 bg-gray-300 border border-gray-400 rounded-lg flex items-center justify-center">
      {slideOpened}
    </div>
  );
}
