document.addEventListener("DOMContentLoaded", function() {
  ancE();
  btnE();
  modalE();
});

window.addEventListener('scroll', function(){
  scrollNav()
});

function scrollNav(){
  let scrollTop = document.documentElement.scrollTop;
  let navItem = document.querySelectorAll('.menu > li')
  let section = document.querySelectorAll('.item')

  for(let i = 0; i < navItem.length; i++){
    let menuHeight = document.querySelector('.menu').clientHeight - 80;

    if(scrollTop - menuHeight > section[i].offsetTop) {
      navItem[i].classList.add('on')

      var siblings = Array.from(navItem[i].parentNode.children);

      siblings.forEach(function(element) {
      if (element !== navItem[i]) {
          element.classList.remove('on');
        }
      });
    }
  }
}


function ancE(){
  var links = document.querySelectorAll('.menu > li > a');
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      if (link.hash !== "") {
        event.preventDefault();

        var hash = link.hash;
        var targetElement = document.querySelector(hash);

        if (targetElement) {
          var startPosition = window.pageYOffset;
          var targetPosition = targetElement.offsetTop;
          var distance = targetPosition - startPosition;
          var duration = 800;
          var startTime = null;

          function animate(currentTime) {
            if (startTime === null) {
              startTime = currentTime;
            }

            var elapsedTime = currentTime - startTime;
            var scrollPosition = easeInOutCubic(elapsedTime, startPosition, distance, duration);
            window.scrollTo(0, scrollPosition);

            if (elapsedTime < duration) {
              requestAnimationFrame(animate);
            } else {
              window.location.hash = hash;
            }
          }

          function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
          }

          requestAnimationFrame(animate);
        }
      }
    });
  });
}


function modalE() {
  let modalP = document.querySelector('.popup_modal')

  document.querySelector('.popup_btn').addEventListener('click', function(event){
    event.preventDefault();
    modalP.classList.add('on')
    document.querySelector('html').classList.add('not_scroll')
  })

  document.querySelector('.close_btn').addEventListener('click', function(event){
    event.preventDefault();
    modalP.classList.remove('on')
    document.querySelector('html').classList.remove('not_scroll')
  })

}

function btnE(){
  let swiperB = document.querySelectorAll('.btn')

  for(let i = 0;  i < swiperB.length; i++){
    swiperB[i].addEventListener('click', function(event){
      event.preventDefault();

    })
  }
}

/* swiperDefault */
var swiperDefault = new Swiper(".swiper-Default", {});
var autoplay = {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
}
var fade = {
  effect: "fade",
  loop: true
}
document.querySelector('.auto').addEventListener('click', function(){
  swiperDefault.destroy()
  swiperDefault = new Swiper('.swiper-Default', autoplay)
})
document.querySelector('.fade').addEventListener('click', function(){
  swiperDefault.destroy()
  swiperDefault = new Swiper('.swiper-Default', fade)
})
/* //swiperDefault */


/* swiper-Navigation */
var swiperNavigation = new Swiper(".swiper-Navigation", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var between = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 60
}
var per = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 10,
  slidesPerView: 3
}
document.querySelector('.between').addEventListener('click', function(){
  swiperNavigation.destroy()
  swiperNavigation = new Swiper('.swiper-Navigation', between)
})
document.querySelector('.per').addEventListener('click', function(){
  swiperNavigation.destroy()
  swiperNavigation = new Swiper('.swiper-Navigation', per)
})
/* //swiper-Navigation */




/* swiper-Pagination */
var swiperPagination = new Swiper(".swiper-Pagination", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var dynamic = {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
};

var Progress = {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
};

var fraction = {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
};

document.querySelector('.Dynamic').addEventListener('click', function(){
  swiperPagination.destroy()
  swiperPagination = new Swiper('.swiper-Pagination', dynamic)
})
document.querySelector('.progressbar').addEventListener('click', function(){
  swiperPagination.destroy()
  swiperPagination = new Swiper('.swiper-Pagination', Progress)
})
document.querySelector('.fraction').addEventListener('click', function(){
  swiperPagination.destroy()
  swiperPagination = new Swiper('.swiper-Pagination', fraction)
})
/* //swiper-Pagination */


/* swiper-Scrollbar */
var swiperScrollbar = new Swiper(".swiper-Scrollbar", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
/* //swiper-Scrollbar */


/* swiper-Grid */
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
/* //swiper-Grid */