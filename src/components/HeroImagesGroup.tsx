"use client";
import { memo, useRef } from "react";
import useBoundingClientRect from "@/hooks/useBoundingClientRect";
export default memo(function HeroImagesGroup() {
  const { top, ref } = useBoundingClientRect();
  return (
    <article
      onClick={() => alert(top)}
      ref={ref}
      className="flex gap-1 [perspective:1000px]"
    >
      <div className="w-4/12 flex flex-col gap-1 [perspective:1000px]">
        <HeroImageGroupCard />
        <HeroImageGroupCard />
      </div>
      <div className="w-4/12 flex flex-col gap-1 [perspective:1000px] relative -top-40">
        <HeroImageGroupCard />
        <HeroImageGroupCard />
        <HeroImageGroupCard />
      </div>
      <div className="w-4/12 flex flex-col gap-1 [perspective:1000px]">
        <HeroImageGroupCard />
        <HeroImageGroupCard />
      </div>
    </article>
  );
});

const HeroImageGroupCard = () => {
  return (
    <div className="bg-dark border-2 border-[#ffffff11] rounded shadow-lg h-80 [transform:rotateY(10deg)]" />
  );
};
