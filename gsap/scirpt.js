includeHTML();

// gasp basic
// duration - 지속시간 , x - x축으로 이동 거리
gsap.to(".ani01 .pink", {rotation: 360, x: 100, duration: 1});

gsap.from(".ani01 .orange", {rotation: -360, x: -100, duration: 1});

gsap.fromTo(".ani01 .green", {x: -100},{rotation: 360, x: 100, duration: 1});



gsap.set('.ani02 .orange',{scale: 0.8});
gsap.to(".ani02 .orange", {opacity: 0.5,	scale: 1.5,},);

// repeat: -1 == 무한반복
const tl = gsap.timeline({repeat: 5, repeatDelay: 1});

tl.to(".ani02 .green", {duration: 1, x: 150})
tl.to(".ani02 .green", {duration: 1, scale: 0.5})
tl.to(".ani02 .green", {duration: 1, y: 150, background: "orange"})
tl.to(".ani02 .green", {duration: 1, scale: 2});



let nav = document.querySelector('.nav')

let tween = gsap.to(".ani02 .pink", {
  duration: 4,
  x: () => 1000, // animate by the px width of the nav
  xPercent: -100, // offset by the width of the box
  rotation: 360,
  ease: "none",
  paused: true
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();