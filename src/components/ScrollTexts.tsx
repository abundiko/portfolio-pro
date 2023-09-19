"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollTexts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const h1Left = useTransform(scrollYProgress, [0, 1], ["0em", "-5em"]);
  const h2Left = useTransform(scrollYProgress, [0, 1], ["0em", "-6em"]);
  const h3Left = useTransform(scrollYProgress, [0, 1], ["0em", "-7em"]);
  const h4Left = useTransform(scrollYProgress, [0, 1], ["0em", "-8em"]);

  function getPreferredLeft(className: string) {
    switch (className) {
      case "h1":
        return h1Left;
      case "h2":
        return h2Left;
      case "h3":
        return h3Left;
      case "h4":
        return h4Left;
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      style={{
        scale: sectionScale
      }}
      className="flex flex-col w-full overflow-x-clip bg-gradient-to-b from-black"
    >
      {developerQualities.map((quality, index) =>
        <motion.p
          initial={{ translateX: quality.before, opacity: 0 }}
          animate={{ translateX: quality.after, opacity: 1 }}
          style={{
            left: getPreferredLeft(quality.className)
          }}
          transition={{
            duration: 2
          }}
          key={index}
          className={`${quality.className} whitespace-nowrap text-light1 relative`}
          dangerouslySetInnerHTML={{ __html: quality.text }}
        />
      )}
    </motion.section>
  );
}

interface DeveloperQuality {
  text: string;
  className: string;
  before: string;
  after: string;
}

const developerQualities: Array<DeveloperQuality> = [
  {
    text:
      "Creative content writer, crafting engaging stories through code that captivate users.",
    className: "h4",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Tech enthusiast, always exploring the latest technologies to build innovative solutions.",
    className: "h3",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Collaborative team player, bringing diverse perspectives together to create exceptional software.",
    className: "h3",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Passionate lifelong learner, continuously expanding knowledge and embracing new challenges.",
    className: "h4",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      'greeting: <span class="text-light">Hello World</span> Attention to detail perfectionist, ensuring flawless execution of every line of code.',
    className: "h2",
    before: "0em",
    after: "-3em"
  },
  {
    text:
      'devs call me <span class="text-primary-light">I Am</span>  unraveling complex puzzles and crafting elegant solutions.',
    className: "h4",
    before: "-10em",
    after: "0.2em"
  },
  {
    text:
      'my name is <span class="text-light">John Doe</span>. Innovative thinker, pushing boundaries and reimagining what\'s possible in software development.',
    className: "h1",
    before: "-10em",
    after: "-5em"
  },
  {
    text:
      'worked for many years in the field with different technologies I am a skilled <span class="text-primary-light opacity-30">Web Developer</span> Effective communicator, translating technical concepts into clear and concise language.',
    className: "h3",
    before: "0em",
    after: "-45em"
  },
  {
    text:
      "Quality-driven developer, writing clean and maintainable code that stands the test of time.",
    className: "h4",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Adaptable quick learner, mastering new technologies with ease and adapting to any challenge.",
    className: "h4",
    before: "-10em",
    after: "0em"
  },

  {
    text:
      "Solution-oriented professional, turning obstacles into opportunities for growth and success.",
    className: "h2",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Collaborative problem solver, leveraging teamwork to achieve extraordinary results.",
    className: "h4",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Meticulous code reviewer, ensuring every line of code meets the highest standards of quality.",
    className: "h1",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Proactive optimizer, constantly seeking ways to improve performance and efficiency.",
    className: "h2",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Dedicated deadline achiever, delivering high-quality software on time, every time.",
    className: "h3",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Curious knowledge seeker, always diving deeper to uncover new insights and possibilities.",
    className: "h4",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Innovative problem solver, finding creative and ingenious solutions to complex challenges.",
    className: "h1",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "User-centric designer, crafting delightful and intuitive experiences for seamless interactions.",
    className: "h2",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Thorough code inspector, detecting even the tiniest bugs and ensuring robustness.",
    className: "h3",
    before: "-10em",
    after: "0em"
  },
  {
    text:
      "Performance-driven optimizer, continuously fine-tuning systems for peak efficiency.",
    className: "h4",
    before: "-10em",
    after: "0em"
  }
];
