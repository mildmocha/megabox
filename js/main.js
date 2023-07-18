

document.querySelector('.btn_closeBanner').onclick = function () {
   document.querySelector('.top-ad').style.height = '0px';
}
const boder = document.querySelectorAll('.gnb1 > li > a') 
//(document.querySelector('.gnb1 > li > a').style.borderBottom = 'none')
const header1 = document.querySelectorAll('.main-header');
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

boder.forEach(function(bos){
   bos.onmouseenter = function(){
      (this.style.borderBottom = '3px solid #fff')
     && (boder[4].style.borderBottom = 'none')
   }
  
})

