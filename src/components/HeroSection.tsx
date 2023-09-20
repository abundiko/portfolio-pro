"use client"

import useBoundingClientRect from "@/hooks/useBoundingClientRect";
import { HeroContextProvider } from "@/context/HeroContext";
import BackCursor from "./BackCursor";
import HeroImagesGroup, { bounceUpAnimations } from "./HeroImagesGroup";
import ScrollTexts from "./ScrollTexts";
import {LegacyRef, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
    const [ref, rect, updateRect] = useBoundingClientRect();
    useEffect(
      () => {
        function handleScroll(e: Event) {
          updateRect();
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      },
      [updateRect]
    );
  return (
    <HeroContextProvider>
      {/* <BackCursor /> */}
      <section onLoad={()=>updateRect} onClick={()=>{console.log(rect?.top);
      }} className="w-full relative overflow-hidden h-fit z-[1]">
        <ScrollTexts />
        <AnimatePresence mode="sync">
        {
          (rect?.top && rect?.top <= 200) &&
        <motion.div
        exit={{
          scale: 0.7,
          opacity:0
        }}
        {...{...bounceUpAnimations}}
        transition={{
          delay: 0,
        }}
         className="absolute top-[70vh] left-[10vw] w-4/12">
          <div className="p-5 shadow-lg rounded-lg border border-[#ffffff11] bg-dark backdrop-blur-lg bg-opacity-10 text-light bg-gradient-to-tr from-[#ffffff22]">
            <h1 className="font-bold text-lg">
              About Me
            </h1>
            <p className="text-sm pt-3 opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta obcaecati nulla fuga ipsam delectus, eveniet suscipit quaerat enim dolorem, architecto laborum vitae sunt ex, inventore vel dolor rerum omnis. Sunt adipisci quod voluptatem odit ad quae amet, laudantium vitae recusandae quos, tempore harum, eum eos alias voluptates sequi accusamus?
            </p>
          </div>
        </motion.div> 
        }
        </AnimatePresence>
        <div  ref={ref as LegacyRef<HTMLDivElement>} className="absolute top-[60vh] right-[10vw] w-5/12">
          <HeroImagesGroup />
        </div>
      </section>
    </HeroContextProvider>
  );
}
