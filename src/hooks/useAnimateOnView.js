import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { setFadeIn, animateFadeIn } from "utils/animations";

const useAnimateOnView = () => {
  const elemRef = useRef(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const location = useLocation();

  useLayoutEffect(() => {
    // check if user prefers reduce motion
    if (!prefersReducedMotion) {

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting } = entry;

          // set inital animation state
          setFadeIn(target);

          // animate on intersect
          if (isIntersecting) {
            animateFadeIn(target,);

            // only run animation once
            observer.unobserve(target);
          }
        });
      }, { threshold: 0.5 });

      if (elemRef.current) {
        observer.observe(elemRef.current);
      }

      return () => {
        if (elemRef.current) {
          observer.unobserve(elemRef.current);
        }
      }
    }

  }, [location]); // reset animation everytime url/location change


  return elemRef;
}



export default useAnimateOnView