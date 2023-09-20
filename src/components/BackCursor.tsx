"use client";

import Image from "next/image";
import { useEffect, useRef, memo } from "react";

export default memo(function BackCursor() {
  const backCursor = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      // define a function that listens to mouse move and sets the top and left of [backCursor]
      function handleMouseMove(e: MouseEvent) {
        if (backCursor.current !== null && e instanceof MouseEvent) {
          const { clientX: x, clientY: y } = e;
          const half = backCursor.current.getBoundingClientRect().width / 2;
          backCursor.current.style.cssText = `
          top: ${y - half}px;
          left: ${x - half}px;
          `;
        }
      }

      // add event listener for mousemove on document object
      document.addEventListener("mousemove", handleMouseMove);
      // remove eventlistener when component unmounts
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    [backCursor]
  );

  return (
    <section className="fixed z-[0] top-0 left-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-full ">
        <Image
          src="/images/hero-gradient.avif"
          alt="Portfolio Hero Image"
          height={window.innerHeight}
          width={window.innerWidth}
          className="object-cover"
        />
      </div>
      <div
        className="bg-primary-light absolute w-[50vw] h-[50vw] rounded-circle bottom-0 right-0 rounded-full blur-2xl transition-[all_1s]"
        ref={backCursor}
      />
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-3xl" />
    </section>
  );
});
