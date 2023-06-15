$(document).ready(function() {
	$('#fullpage').fullpage({
  //이동
  menu: '#menu',  // (기본값 false) 선택자를 써서 구역에 링크할 메뉴를 구체적으로 정할 수 있습니다.
  lockAnchors: false,
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
  navigation: true, // (기본값 false) true로 설정되면 작은 원으로 이루어진 이동 막대기가 나타납니다.
  navigationPosition: 'right', // (기본값 none) left나 right로 설정될 수 있습니다. (만약 쓰실 경우) 이동 막대기가 보여지는 위치를 정의합니다.
  navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'], // (기본값 false) 수직으로 이동할때 능동적 구역 보기를 위해 계속 따라다니는 말풍선 위젯을 보여줍니다.
  showActiveTooltip: true,
  slidesNavigation: true, // (기본값 false) true로 설정되면 웹사이트에서 각 수평방향 슬라이더마다 작은 원으로 이루어진 이동 막대기를 보여줍니다.
  slidesNavPosition: 'bottom',

  //스크롤
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '.popup_modal, #aside',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //접근성
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //디자인
  controlArrows: true,
  verticalCentered: true,
  // sectionsColor : ['#ccc', '#fff'],
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  cards: false,
  cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

  //맞춤 선택자
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,

  //사건(이벤트)
  onLeave: function(origin, destination, direction){},
  afterLoad: function(origin, destination, direction){},
  afterRender: function(){},
  afterResize: function(width, height){},
  afterReBuild: function(){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(section, origin, destination, direction){},
  onSlideLeave: function(section, origin, destination, direction){}
  });
});


document.addEventListener("DOMContentLoaded", function() {

    let modalP = document.querySelector('.popup_modal')

    document.querySelector('.popup_btn').addEventListener('click', function(event){
      event.preventDefault();
      modalP.classList.add('on')
      document.querySelector('html').classList.add('not_scroll')
    })

    document.querySelector('.modal_head > .close_btn').addEventListener('click', function(event){
      event.preventDefault();
      modalP.classList.remove('on')
      document.querySelector('html').classList.remove('not_scroll')
    })


});


includeHTML();