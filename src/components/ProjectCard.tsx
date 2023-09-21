"use client";

import useBoundingClientRect from "@/hooks/useBoundingClientRect";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { RefObject, useEffect, memo } from "react";

/** number setermines when to start animations at the top of the screen */
const topOffset:number = 4

function calcTop(v:number) {
  if(window)
  if(v <= window.innerHeight / topOffset){
    if(v <= -1){
      const positiveValue = -1 * v;
      return (window.innerHeight / topOffset) + positiveValue
    }
    return (window.innerHeight / topOffset) - v
  }
  return 0;
}

export default memo(function ProjectCard({ offset }: { offset: number }) {
  const offsetMeasurement = offset*15;
  const topTrans = useMotionValue(0);
  const [ref, rect, updateRect] = useBoundingClientRect();
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ["start 40%", "0 0"]
  });
  const scalePadding = useTransform(scrollYProgress, [0, 1], ["0em", `${5+offset}em`]);

  useEffect(
    () => {
      function handleScroll(e: Event) {
        updateRect();
        topTrans.set(calcTop(rect?.top ?? 0)-offsetMeasurement)
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [offsetMeasurement, updateRect]
  );

  return (
    <motion.article
      ref={ref as RefObject<HTMLElement>}
      style={{ paddingInline: scalePadding }}
      className="relative w-10/12"
    >
      <motion.div
        style={{ translateY: topTrans }}
        className="relative h-[320px] rounded-2xl bg-opacity-60 backdrop-blur-2xl big-shadow border border-[#ffffffaa] p-3 w-full bg-dark flex flex-wrap"
      >
        <motion.div
        layoutId={offset == 1 ? "contact" : undefined}
         className="relative w-6/12 h-full rounded-lg overflow-hidden">

        <Image
          src="/images/hero-gradient.jpg"
          alt=""
          height={320}
          width={500}
          className="w-full h-full object-cover "
          />
          </motion.div>
        <div className="flex-col w-6/12 p-5 justify-center text-light h-full">
          <h1 className="font-bold text-2xl">Project Number 1</h1>
          <p className="my-2 opacity-80 text-base">Lorevm ipsum dolor sit amet consectetur, adipisicing elit. Ullam, labore ab. Dolore, impedit repellendus porro possimus similique ex explicabo molestiae.</p>
        </div>
      </motion.div>
    </motion.article>
  );
})
