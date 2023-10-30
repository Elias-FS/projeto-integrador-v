import { PlusSideSlide } from "./SideSlide/plusSideSlide";
import { SideSlide } from "./SideSlide/sideSlide";

export function SideSlideShow() {
  return (
    <div className="w-40 bg-white text-white p-4 border-r border-gray-300 h-screen">
      <ul className="mt-4">
        {
          //<SideSlide map >
        }
        <SideSlide>1</SideSlide>
        <SideSlide>2</SideSlide>
        <SideSlide>3</SideSlide>
        <SideSlide>4</SideSlide>
        <SideSlide>5</SideSlide>
        <PlusSideSlide>+</PlusSideSlide>
      </ul>
    </div>
  );
}
