"use client";

import { LayoutGroup, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import Image from "next/image";
import ContactSection from "./ContactSection";
import { fadeAnimation } from "./SkillsCard";

export default function ProjectsSection() {
  const [showContact, setShowContact] = useState(false);
  return (
    <section className="px-8 sm:px-10 md:px-20 lg:px-40 pt-32 bg-black shadow-lg shadow-black z-[2] relative flex flex-col items-center gap-10">
      <h1 className="mb-10 text-3xl font-bold text-light">My Projects</h1>
      <LayoutGroup>
        {[4, 3, 2, 1].map(item => {
          const reverseIndex = item;
          return <ProjectCard key={item} offset={item} />;
        })}
        {showContact &&
          <motion.div
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            layoutId="contact"
            className="fixed top-0 left-0 rounded-lg bg-cover shadow w-full h-full bg-[url(/images/hero-gradient.jpg)] overflow-hidden"
          >
            <ContactSection />
          </motion.div>}
      </LayoutGroup>
      <motion.div
        onViewportEnter={() => setShowContact(true)}
        onViewportLeave={() => setShowContact(false)}
        className="mt-40 py-5 text-primary-light"
      />
    </section>
  );
}
