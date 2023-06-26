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


gsap.registerPlugin(MotionPathPlugin);
gsap.to(".ani03 .pink", {
  duration: 5,
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});


gsap.fromTo(".ani04 .orange", {rotation: -8},{rotation: 8, duration: 0.3, yoyo:true, ease: "none", repeat: -1 });
gsap.fromTo(".ani04 .orange", {y: -30},{y: 30, duration: 0.6, yoyo:true,ease: "none", repeat: -1 });


const t2 = gsap.timeline({repeat: 1, repeatDelay: 1});

t2.fromTo($('.ani05 ._card_set'), {
  opacity: 1,
  rotate: -55,
  x: -300,
  y: 670,
  scaleX: 0.5,
  scaleY: 0.5,
}, {
  rotate: 0,
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
  duration: 1.6,
  ease: 'power1.out',
}, '< 1')
.fromTo($('.ani05 ._card_set > div'), {
  rotate: -28,
  skewY: 5,
},{
  rotate: 0,
  skewY: 0,
  duration: 0.8,
  stagger: -0.2, //stagger: 시간차 부여
  ease: 'power1.out',
  onComplete: function() {

      $('.ani05 ._card_set > div').each(function(i, v) {

        var $this = $(this);
        var $hover = $(this).find('img');
        var animation = null;
        var isHovering = false;

        $this.on('mouseenter', function() {
          $(this).addClass('_active');
          gsap.to($(this).find('img'), {
            y: -(120 - ((i*13)/0.9)),
            ease: "power1.out",
            duration: (+(Math.round(0.4 - (i*1.5/100) + 'e+2') + 'e-2')),
            overwrite: true,
          });

        }).on('mouseleave', function() {
          gsap.to($('.ani05 ._card_set > ._active img'), {
            y: 0,
            ease: "power1.out",
            duration: (+(Math.round(0.4 - (i*1.5/100) + 'e+2') + 'e-2')),
            overwrite: true,
          });
          $(this).removeClass('_active');
        });

      });

  },
})