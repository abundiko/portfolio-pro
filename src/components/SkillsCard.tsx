import { motion } from "framer-motion";
import { bounceUpAnimations } from "./HeroImagesGroup";
import Skill from "./Skill";
import { mySkills } from "@/data/mySkills";

export default function SkillsCard() {
  return (
    <motion.div
      exit={{ scale: 0.7, opacity: 0 }}
      {...bounceUpAnimations}
      transition={{ delay: 0 }}
      className="absolute top-[120vh] left-[8%] sm:left-[18%] md:left-[10vw] w-10/12 sm:w-8/12 md:w-4/12"
    >
      <div className="p-5 shadow-black shadow-lg rounded-lg border border-[#ffffff11] bg-dark backdrop-blur-lg bg-opacity-10 text-light bg-gradient-to-tr from-[#ffffff22]">
        <motion.h1
          {...fadeAnimation}
          transition={{ delay: 0.2 }}
          className="font-bold text-xl"
        >
          My Skills
        </motion.h1>
        <div className="grid grid-cols-4 gap-3 mt-3">
          {mySkills.map((item, i) =>
            <Skill index={i} {...item} key={item.name} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export const fadeAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
};
