
(function() {

var aniTimer;
var aniState = true;
var $dayAni = $('._nav_content_4 ._day_ani');

var engine = Matter.Engine.create();
var dayArr = [];

$.each($('._nav_content_4 ._day_ani').find('._item'), function(idx, value) {
  var $this = $(this);
  dayArr.push(Matter.Bodies.circle(
    gsap.utils.random($this.outerWidth(), $dayAni.innerWidth() - 400),
    gsap.utils.random(-$this.outerWidth(), -$this.outerWidth() * 3),
    $this.outerWidth()/2,
    {isStatic: false, restitution: gsap.utils.random(-0.1, 0.7), angle: gsap.utils.random(0, 1.8), force: {x: gsap.utils.random(-0.5, 0.5), y: gsap.utils.random(0.1, 0.5)}, frictionAir: gsap.utils.random(0.006, 0.03)},
    100
    )
  );
});

$.each(dayArr, function() {
  Matter.Composite.add(engine.world, [this]);
});

var staticBox = {
  left: Matter.Bodies.rectangle(
    $dayAni.find('._left').position().left + ($dayAni.find('._left').width() / 2),
    $dayAni.find('._left').height() / 4,
    $dayAni.find('._left').width(),
    $dayAni.find('._left').height() * 2,
    {isStatic: true}
  ),
  right: Matter.Bodies.rectangle(
    $dayAni.find('._right').position().left + ($dayAni.find('._right').width() / 2),
    $dayAni.find('._right').height() / 4,
    $dayAni.find('._right').width(),
    $dayAni.find('._right').height() * 2,
    {isStatic: true}
  ),
  center: Matter.Bodies.rectangle(
    $dayAni.find('._center').position().left + ($dayAni.find('._right').width() / 2),
    $dayAni.find('._center').height() / 2,
    $dayAni.find('._center').width(),
    $dayAni.find('._center').height() / 2 ,
    {isStatic: true, angle: gsap.utils.random(-0.45, 0.45)}
  ),
  bottom: Matter.Bodies.rectangle(
    $dayAni.find('._bottom').position().left + ($dayAni.find('._bottom').width() / 2),
    $dayAni.find('._bottom').position().top,
    $dayAni.find('._bottom').width(),
    $dayAni.find('._bottom').height(),
    {isStatic: true}
  ),
};

$.each(staticBox, function() {
  Matter.Composite.add(engine.world, [this]);
});

/*
Matter.Render.run(Matter.Render.create({
  element: $('._nav_content_4 ._content_header')[0],
  engine: engine,
  options: {
    width:1920,
    height:670,
  }
}));
*/

Matter.Events.on(engine, 'collisionEnd', function(e) {

  clearTimeout(aniTimer);
  aniTimer = setTimeout(function() {
    aniState = false;
    $dayAni.find('._area').css('opacity', 0);
  }, 5000);

});

ScrollTrigger.create({
  trigger: '._nav_content_4 ._day_ani',
  start: "top 60%",
  once: true,
  onEnter: function() {
    gsap.set($dayAni, {opacity: 1});
    aniPlayer();
  },
});

function aniPlayer(state) {

  $.each(dayArr, function(idx, value) {

    var bodyPos = {
      x: this.position.x,
      y: this.position.y,
      a: this.angle,
    };

    var $aniDayItem = $dayAni.find('._item').eq(idx);

    $aniDayItem.css({
      transform: 'translate('+ (bodyPos.x - ($aniDayItem.width() / 2)) +'px, '+ (bodyPos.y - ($aniDayItem.height() / 2)) +'px) rotate('+ bodyPos.a +'rad)',
    });

  });

  Matter.Engine.update(engine);

  if (aniState) {
    requestAnimationFrame(aniPlayer);
  }

}

})();
