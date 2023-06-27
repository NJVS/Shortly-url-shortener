import { gsap } from "gsap";


/**
 * FadeIn Animation
 */
export function setFadeIn(target) {
  const q = gsap.utils.selector(target);

  gsap.set(q('.fadeIn'), {
    autoAlpha: 0,
    y: 50,
  });
}

export function animateFadeIn(target) {
  const q = gsap.utils.selector(target);
  const elems = q('.fadeIn');

  gsap.to(elems, {
    autoAlpha: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.4,
    delay: 0.3,
    ease: 'power1.out',
  });
}