import {useState, useEffect, useRef} from 'react'

export default function useBoundingClientRect(){
  const [rect, setRect] = useState<DOMRect|undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  
  const clientRect:DOMRect|undefined = ref.current?.getBoundingClientRect()
  useEffect(() => {
   
    
  }, [clientRect, ref])

  console.log("rect",clientRect, rect);
  
  return {
    ...clientRect,
    ref
  }
}