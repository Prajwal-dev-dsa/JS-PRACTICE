function throttle(fn, delay) {
  let isThr = false;

  return function (...args) {
    if (!isThr) {
      fn.apply(this, args);
      isThr = true;

      setTimeout(() => {
        isThr = false;
      }, delay);
    }
  };
}

let center = document.querySelector(".center");

center.addEventListener(
  "mousemove",
  throttle((dets) => {
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.pexels.com/photos/26746959/pexels-photo-26746959/free-photo-of-close-up-of-a-person-holding-a-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    );

    let box = document.createElement("div");
    box.classList.add("boxColor");
    box.style.left = dets.clientX + "px";
    box.style.top = dets.clientY + "px";

    box.appendChild(img);
    document.body.appendChild(box);

    gsap.to("img", {
      y: 0,
      duration: 1,
      ease: Power3,
    });

    setTimeout(() => {
      box.remove();
    }, 1500);
  }, 200)
);
