import { useEffect, useRef, useState } from "react";

// Define the type for the boundingClientRect properties
interface BoundingClientRect {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}

// Custom hook definition
function useBoundingClientRect<T extends HTMLElement>(): [
  React.RefObject<T> | React.LegacyRef<T>,
  BoundingClientRect | null,
  () => void
] {
  // Create a ref to attach to the DOM element
  const ref = useRef<T>(null);

  // State to store the boundingClientRect
  const [
    boundingClientRect,
    setBoundingClientRect
  ] = useState<BoundingClientRect | null>(null);

  useEffect(() => {
    // Function to update the boundingClientRect
    const updateBoundingClientRect = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Update the state with the boundingClientRect properties
        setBoundingClientRect({
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.width,
          height: rect.height
        });
      }
    };

    // Attach the event listener to the window's resize event
    window.addEventListener("resize", updateBoundingClientRect);

    // Call the update function once to initialize the values
    updateBoundingClientRect();

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateBoundingClientRect);
    };
  }, []);

  // Function to manually update the boundingClientRect
  const updateRect = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // Update the state with the new boundingClientRect properties
      setBoundingClientRect({
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
  };

  return [ref, boundingClientRect, updateRect];
}

export default useBoundingClientRect;
