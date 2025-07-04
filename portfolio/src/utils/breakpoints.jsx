import { useState, useEffect } from "react";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("desktop");

  useEffect(() => {
    function updateBreakpoint() {
      if (window.innerWidth < 640) {
        setBreakpoint("mobile");
      } else if (window.innerWidth < 1024) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    }
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}

export default useBreakpoint;