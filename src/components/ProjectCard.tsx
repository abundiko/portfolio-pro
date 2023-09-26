"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo, useRef } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Skill from "./Skill";

export type ProjectProps = {
  title: string;
  subtitle: string;
  img: string;
  code?: string;
  live?: string;
  technologies: string[];
  offset: number;
};

export default memo(function ProjectCard({
  offset,
  title,
  subtitle,
  img,
  code,
  live,
  technologies
}: ProjectProps) {
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
      <motion.div className="relative h-fit md:h-[clamp(20em,_60vh,_22em)] rounded-2xl bg-opacity-60 backdrop-blur-2xl big-shadow border border-[#ffffffaa] p-3 w-full bg-dark flex flex-wrap items-center">
        <motion.div
          layoutId={offset == 1 ? "contact" : undefined}
          className="relative w-full md:w-6/12 h-[min(45vh,280px)] md:h-full rounded-lg overflow-hidden"
        >
          <Image
            src={`/images/${img}`}
            alt=""
            height={600}
            width={600}
            className="w-full h-full object-cover "
          />
        </motion.div>
        <div className="flex-col w-full md:w-6/12 p-5 h-fit justify-center text-light">
          <h1 className="font-bold text-2xl">
            {title}
          </h1>
          <p className="my-4 opacity-80 text-base">
            {subtitle}
          </p>
          <div className="flex gap-3">
            {code &&
              <Link
                href={code}
                target="_blank"
                className="font-bold text-light hover:text-primary-light hover:underline underline-offset-4 inline-flex justify-center items-center gap-2"
              >
                <FaGithub />
                Code
              </Link>}
            {live &&
              <Link
                href={live}
                target="_blank"
                className="font-bold text-light hover:text-primary-light hover:underline underline-offset-4 inline-flex justify-center items-center gap-2"
              >
                <FaLink />
                Live
              </Link>}
          </div>
          <div className="flex gap-1 mt-3">
            {technologies.map((item, i) =>
              <div key={title + item} className="h-10 w-10 aspect-square">
                <Skill icon={item} index={i} />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
});
