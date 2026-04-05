import { useState, useEffect } from "react";

/**
 * Custom hook that will get container dimensions when the referenced
 * node resizes.
 * @param {RefObject} ref - ref object
 * @returns {{width: number, height: number}} - height and width of ref object
 */
const useContainerDimensions = (ref) => {
  // get current dimensions of component
  const getDimensions = () => ({
    width: ref.current.offsetWidth,
    height: ref.current.offsetHeight
  });

  // set initial dimension state
  const [ dimensions, setDimensions ] = useState({ width: 0, height: 0 });

  // This will run after the render is committed to the screen and also
  // when myRef changes
  useEffect(() => {
    // set dimensions at current component state
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    // if DOM element available
    if (ref.current) {
      setDimensions(getDimensions());
    }

    // add handle resize function to event listener
    window.addEventListener("resize", handleResize);

    // on unmount remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ ref ]);

  return dimensions;
};

export default useContainerDimensions;
