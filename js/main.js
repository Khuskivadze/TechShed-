 


 

// let listBtn = document.querySelector('.collection');
// document.querySelector('#collection').onclick = () =>{
//     listBtn.classList.toggle('active');
//     console.log("show me")
// }





 
let loadMoreBtn = document.querySelector('#load-btn');
let currentItem = 4;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('  .shop-container .box')];
   for (var i = currentItem; i < currentItem + 4; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 4;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}
