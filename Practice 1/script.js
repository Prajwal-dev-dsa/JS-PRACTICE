let center = document.querySelector(".center");

center.addEventListener("mousemove", (dets) => {
  let outer = center.getBoundingClientRect();
  let inner = dets.clientX;
  let value = inner - outer.left;
  if (value < outer.width / 2) {
    let redColor = gsap.utils.mapRange(0, outer.width / 2, 255, 0, value);
    gsap.to(".center", {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power3,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      outer.width / 2,
      outer.width,
      0,
      255,
      value
    );
    gsap.to(".center", {
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease: Power3,
    });
  }
});

center.addEventListener("mouseleave", () => {
  gsap.to(".center", {
    backgroundColor: "transparent",
  });
});
