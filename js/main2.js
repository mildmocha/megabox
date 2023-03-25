



const menus = document.querySelectorAll('.gnb1 > li');
const hover = document.querySelector('#hover')

menus.forEach(function(menu){
   menu.onmouseover = function(){
      (menu.children[1]).style.display = 'block'
      && (hover.style.display = 'block')
   }
 
   menu.onmouseout = function(){
      menu.children[1].style.display = 'none'
      && (hover.style.display = 'none')
   }
})


