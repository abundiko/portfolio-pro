import { motion } from "framer-motion";
import Image from "next/image";
import { fadeAnimation } from "./SkillsCard";

interface SkillProps {
  name: string;
  icon: string;
  index: number;
}

const Skill = ({ name, icon, index }: SkillProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 0.1 * index,
        type: "spring",
        damping: 6,
        stiffness: 200
      }}
      className="flex w-full py-2 flex-col gap-1 text-center items-center justify-center h-20 aspect-square rounded-lg bg-dark border border-[#ffffff11]"
    >
      <Image
        src={`/images/icons/${icon}.png`}
        alt={name}
        height={50}
        width={50}
        className="w-5/12 aspect-square"
      />
      <span className="text-xs font-light">
        {name}
      </span>
    </motion.div>
  );
};

export default Skill;
