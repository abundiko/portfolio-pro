"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import HeroImageGroupCard from "./HeroImageGroupCard";
export default memo(function HeroImagesGroup() {
  return (
    <motion.article
      {...bounceUpAnimations}
      className="flex gap-1 [perspective:1000px] relative"
    >
      <div className="w-6/12 lg:w-4/12 flex flex-col gap-1 [perspective:1000px]">
        <HeroImageGroupCard />
        <HeroImageGroupCard />
      </div>
      <div className="w-6/12 lg:w-4/12 flex flex-col gap-1 [perspective:1000px] relative -top-20 lg:-top-40">
        <HeroImageGroupCard />
        <HeroImageGroupCard />
        <HeroImageGroupCard />
      </div>
      <div className="w-4/12 lg:flex flex-col gap-1 [perspective:1000px] hidden">
        <HeroImageGroupCard />
        <HeroImageGroupCard />
      </div>
    </motion.article>
  );
});

export const bounceUpAnimations = {
  initial: {
    opacity: 0,
    translateY: 200
  },
  animate: {
    opacity: 1,
    translateY: 0
  },
  transition: {
    delay: 1.2,
    damping: 7,
    stiffness: 150,
    type: "spring"
  }
};
