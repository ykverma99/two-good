let circle = document.getElementById("circle");
let circleText = document.getElementById("circle-text");
let video = document.getElementById("video");
let imageBox = document.getElementById("images-container");
let img = document.querySelectorAll(".img");
let product = document.querySelectorAll(".product");

function animateCircle(container, elm, color) {
  container.addEventListener("mousemove", (dest) => {
    elm.style.left = `${dest.x}px`;
    elm.style.top = `${dest.y}px`;
    elm.style.scale = 1;
    elm.style.opacity = 1;
    elm.style.backgroundColor = color;
  });

  container.addEventListener("mouseleave", () => {
    elm.style.scale = 0;
    elm.style.opacity = 0;
  });
}

animateCircle(video, circle, "black", "Play");
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#container'),
//   smooth: true
// });

let imgHeight = imageBox.getBoundingClientRect();
window.addEventListener("scroll", () => {
  let prop = imgHeight.top - (window.innerHeight / 5) * 4;
  let btm = prop / 2 + prop;
  if (window.scrollY < btm) {
    img.forEach((i) => {
      i.style.scale = 1.1;
    });
  } else {
    if (prop <= window.scrollY) {
      img.forEach((i) => {
        i.style.scale = 1;
      });
    } else {
      img.forEach((i) => {
        i.style.scale = 1.1;
      });
    }
  }
});

product.forEach((pro, i) => {
  switch (i) {
    case 0:
      animateCircle(pro, circle, "rgba(237, 185, 230,0.8)");
      break;
    case 1:
      animateCircle(pro, circle, "rgba(235, 237, 185,0.8)");
      break;
    case 2:
      animateCircle(pro, circle, "rgba(185, 219, 237,0.8)");
      break;
    default:
      animateCircle(pro, circle, "rgba(199, 201, 201,0.8)");
      
  }
});
