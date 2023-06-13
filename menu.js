function loadItem(){
  return fetch("/js/list.json")
  .then((res) => res.json())
  .then((json => json.listItem))
}

loadItem().then((items) => {
  List(items)
})


function List(items){
  let itemData = items.reverse()

  let list = document.querySelector('.gnb_list')
  itemData.forEach(item => {
    list.insertAdjacentHTML('afterbegin', `
      <li class="list_item"><a href="${item.url}">${item.title}</a></li>
    `)
  });


  let close_btn = document.querySelector('.close_btn')

  close_btn.addEventListener('click', function(){
      close_btn.parentNode.parentNode.classList.toggle('on')
  })
}
