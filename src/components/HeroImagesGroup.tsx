"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import HeroImageGroupCard from "./HeroImageGroupCard";
export default memo(function HeroImagesGroup() {
  return <motion.article {...bounceUpAnimations} className="flex gap-1 [perspective:1000px] relative">
      {images.map((list, index) =>
        <div
          key={"images" + index}
          className={`w-6/12 lg:w-4/12 flex flex-col gap-1 relative ${index ==
            1 && " -top-20 lg:-top-40"}`}
        >
          {list.map(item => <HeroImageGroupCard img={item} key={item} />)}
        </div>
      )}
    </motion.article>;
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

const images = [
  ["p1.jpg","p2.jpg"],
  ["p6.jpg","p3.jpg","p4.jpg"],
  ["p5.jpg","p6.jpg"],
]