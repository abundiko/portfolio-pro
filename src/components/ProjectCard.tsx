"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { memo, useRef } from "react";

export default memo(function ProjectCard({ offset }: { offset: number }) {
  const offsetMeasurement = 120 - offset * 20;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "0 0"]
  });
  const scalePadding = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <motion.article
      ref={ref}
      style={{ scale: scalePadding, top: offsetMeasurement }}
      className="sticky w-full max-w-[800px] [transform-origin:top]"
    >
      <motion.div className="relative h-fit md:h-[clamp(20em,_60vh,_22em)] rounded-2xl bg-opacity-60 backdrop-blur-2xl big-shadow border border-[#ffffffaa] p-3 w-full bg-dark flex flex-wrap">
        <motion.div
          layoutId={offset == 1 ? "contact" : undefined}
          className="relative w-full md:w-6/12 h-[min(45vh,280px)] md:h-full rounded-lg overflow-hidden"
        >
          <Image
            src="/images/hero-gradient.jpg"
            alt=""
            height={320}
            width={500}
            className="w-full h-full object-cover "
          />
        </motion.div>
        <div className="flex-col w-full md:w-6/12 p-5 justify-center text-light h-full">
          <h1 className="font-bold text-2xl">Project Number 1</h1>
          <p className="my-2 opacity-80 text-base">
            Lorevm ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
            labore ab. Dolore, impedit repellendus porro possimus similique ex
            explicabo molestiae.
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
});
