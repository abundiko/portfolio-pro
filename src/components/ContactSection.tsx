"use client";

import { mySkills } from "@/data/mySkills";
import Skill from "./Skill";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation } from "./SkillsCard";

export default function ContactSection() {
  return (
    <motion.section
      {...fadeAnimation}
      transition={{ delay: 0.6 }}
      className="relative flex w-full h-full flex-col text-light justify-center items-center text-center bg-dark bg-opacity-90"
    >
      <AnimatePresence>
        <motion.h1
          key="h1-contact"
          {...fadeAnimation}
          transition={{ delay: 1.3 }}
          className="font-bold text-3xl md:text-6xl mb-4"
        >
          Contact Me
        </motion.h1>
        <motion.p
          key="p-contact"
          {...fadeAnimation}
          transition={{ delay: 1.6 }}
          className="opacity-80 text-sm md:text-lg mb-4 px-8 w-[550px] max-w-[90vw]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo
          nesciunt itaque ea blanditiis autem hic odit odio illo! Asperiores
          debitis iusto impedit culpa deleniti hic modi nobis dolorem
          dignissimos!
        </motion.p>
        <motion.div
          key={"no animate"}
          {...fadeAnimation}
          transition={{ delay: 1.9 }}
          className="w-[400px] grid grid-cols-4 gap-3 mt-3 max-w-[90vw]"
        >
          {mySkills.map(
            (item, i) =>
              i < 4 && <Skill index={i} {...item} key={item.name + "contact"} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
