// console.log(scrollTop)


window.addEventListener('scroll', function(){
  scrollNav()
})

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
