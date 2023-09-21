"use client"

import useBoundingClientRect from "@/hooks/useBoundingClientRect";
import { HeroContextProvider } from "@/context/HeroContext";
import BackCursor from "./BackCursor";
import HeroImagesGroup, { bounceUpAnimations } from "./HeroImagesGroup";
import ScrollTexts from "./ScrollTexts";
import {LegacyRef, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import AboutCard from "./AboutCard";
import SkillsCard from "./SkillsCard";

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
      <BackCursor />
      <section onLoad={()=>updateRect} onClick={()=>{console.log(rect?.top);
      }} className="w-full relative overflow-hidden h-fit z-[1]">
        <ScrollTexts />
        <AnimatePresence>
        {
          (rect?.top && rect?.top <= (window.innerHeight / 4)) &&
          <AboutCard key={"ABOUT_CARD"} />
        }
        {
          (rect?.top && rect?.top <= (window.innerHeight - ((window.innerHeight / 7) * 7.2))) &&
          <SkillsCard key={"SKILLS_CARD"} />
        }
        </AnimatePresence>
        <div  ref={ref as LegacyRef<HTMLDivElement>} className="absolute top-[60vh] right-[10vw] w-5/12">
          <HeroImagesGroup />
        </div>
      </section>
    </HeroContextProvider>
  );
}
