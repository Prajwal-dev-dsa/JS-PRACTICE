window.addEventListener("mousemove", (dets) => {
  let val = gsap.utils.mapRange(
    0,
    window.innerWidth,
    window.innerWidth / 2 - 500,
    window.innerWidth / 2 + 500,
    dets.clientX
  );
  gsap.to(".center", {
    left: val,
    ease: Power3,
  });
});
