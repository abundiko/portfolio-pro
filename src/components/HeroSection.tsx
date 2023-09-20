import { HeroContextProvider } from "@/context/HeroContext";
import BackCursor from "./BackCursor";
import HeroImagesGroup from "./HeroImagesGroup";
import ScrollTexts from "./ScrollTexts";

export default function HeroSection() {
  return (
    <HeroContextProvider>
      {/* <BackCursor /> */}
      <section className="w-full relative overflow-hidden h-fit z-[1]">
        <ScrollTexts />
        <div className="absolute top-[60vh] right-[10vw] w-5/12">
          <HeroImagesGroup />
        </div>
      </section>
    </HeroContextProvider>
  );
}
