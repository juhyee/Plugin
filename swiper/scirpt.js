var swiperDefault = new Swiper(".swiper-Default", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


var swiperNavigation = new Swiper(".swiper-Navigation", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiperPagination = new Swiper(".swiper-Pagination", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});


var swiperProgress = new Swiper(".swiper-progress", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiperFraction = new Swiper(".swiper-Fraction", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiperScrollbar = new Swiper(".swiper-Scrollbar", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});


var swiperProgress = new Swiper(".swiper-Progress", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiperGrid = new Swiper(".swiper-Grid", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/*
spaceBetween: num  // 슬라이드 사이 여백
slidesPerView :  num // 한 슬라이드에 보여줄 갯수
centeredSlides: t/f   //센터모드
autoplay: {   //자동슬라이드 (false-비활성화)
  delay: num  // 시간 설정
  disableOnInteraction: t/f // false-스와이프 후 자동 재생
},

loop : t/f   // 슬라이드 반복 여부

loopAdditionalSlides : num // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
pagination: { // 호출(pager) 여부
  el: ".swiper-pagination", //버튼을 담을 태그 설정
  clickable: true, // 버튼 클릭 여부
},
navigation: {   // 버튼
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
freeMode : false, // 슬라이드 넘길 때 위치 고정 여부

autoHeight : true,  // 현재 활성 슬라이드높이 맞게 높이조정

a11y : false, // 접근성 매개변수(접근성 관련 대체 텍스트 설정이 가능)

resistance : false, // 슬라이드 터치 저항 여부

slideToClickedSlide : true, // 해당 슬라이드 클릭시 슬라이드 위치로 이동

allowTouchMove : true, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능

watchOverflow : true // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정

slidesOffsetBefore : number, // 슬라이드 시작 부분 여백

slidesOffsetAfter : number,

observer: true,  // 스타일을 변경하거나(예: 숨기기/표시) 하위 요소를 수정(슬라이드 추가/제거)할 때마다 스위퍼가 업데이트(초기화)된다
                    css 변화 감지 (display:none -> display: block)
observeParents: true,

*/



/*
// 변수에 담아서 활용 예시
var slideSetting = {
    slidesPerView : 'auto',
    spaceBetween : 6,
    loop : false,
}
const slide = new Swiper('#test-slide', slideSetting)


// ex) mySlider.autoplay.start()
.slideTo(index, speed, runCallbacks) // 해당 슬라이드로 이동
.slidePrev(index, speed, runCallbacks) // 이전 슬라이드로 이동
.slideNext(index, speed, runCallbacks) // 다음 슬라이드로 이동
.autoplay.start(); // 자동 재생 시작
.autoplay.stop(); // 자동 재생 정지
.destroy() // 슬라이드 제거


*/