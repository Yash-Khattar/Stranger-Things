(function() {

  let magic = document.querySelector('.magic');
  let magicWHalf = magic.offsetWidth / 2;

  document.body.addEventListener('mousemove',function(e){
    magic.style.left = e.pageX - magicWHalf+'px';
    magic.style.top = e.pageY - magicWHalf+'px';
  });

  document.body.addEventListener('mouseout',function(e){
    //magic.style.left = 'calc(50% - 10rem)';
    //magic.style.top = 'calc(50% - 10rem)';
  });

})();

function onClick(){
  
}

// window.onload = function() {
//   document.getElementById("my_audio").play();
// }

// function autoplay(){
//   var r =confirm("Would You Like To AutoPlay Music?");
//   if (r == true) {
//       document.getElementById("my_audio").play();
//   }
// }

// autoplay();