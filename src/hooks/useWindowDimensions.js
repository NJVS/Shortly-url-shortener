import { useState, useEffect } from "react";

function useWindowDimensions() {
  const [dimensions, setDimesions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function resizeHandler() {
      setDimesions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  return dimensions;
}

export default useWindowDimensions