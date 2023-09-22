import { motion } from "framer-motion";
import { bounceUpAnimations } from "./HeroImagesGroup";
import { fadeAnimation } from "./SkillsCard";

export default function AboutCard() {
  return (
    <motion.div
      exit={{ scale: 0.7, opacity: 0 }}
      {...bounceUpAnimations}
      transition={{ delay: 0 }}
      className="absolute top-[70vh] left-[8%] sm:left-[18%] md:left-[10vw] w-10/12 sm:w-8/12 md:w-4/12"
    >
      <div className="p-5 shadow-black shadow-lg rounded-lg border border-[#ffffff11] bg-dark backdrop-blur-lg bg-opacity-10 text-light bg-gradient-to-tr from-[#ffffff22]">
        <motion.h1
          {...fadeAnimation}
          transition={{ delay: 0 }}
          className="font-bold text-xl"
        >
          About Me
        </motion.h1>
        <motion.p
          {...fadeAnimation}
          transition={{ delay: 0.3 }}
          className="text-sm pt-3 opacity-80"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta
          obcaecati nulla fuga ipsam delectus, eveniet suscipit quaerat enim
          dolorem, architecto laborum vitae sunt ex, inventore vel dolor rerum
          omnis. Sunt adipisci quod voluptatem odit ad quae amet, laudantium
          vitae recusandae quos, tempore harum, eum eos alias voluptates sequi
          accusamus?
        </motion.p>
      </div>
    </motion.div>
  );
}
