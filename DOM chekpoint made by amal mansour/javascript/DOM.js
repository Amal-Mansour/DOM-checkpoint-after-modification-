
///////////////////////////********************create function slide show caroussel scroll image on screen///////////////////////////////************************ *

var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

/////////*****************//// function click favorit heart change color from red to black and from black to red ///////*********/
let favorit =  Array.from(document.querySelectorAll(".fa-heart"));
let deletBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
let cards = Array.from(document.querySelectorAll(".card"));
let plusBtn = Array.from(document.querySelectorAll(".fa-plus-circle"));
let minusBtn = Array.from(document.querySelectorAll(".fa-minus-circle"));



///////*********function favorit/////****** *////////////////********* */

for(let fav of favorit){
  fav.addEventListener('click',function(){
    if( fav.style.color === "black") {
        fav.style.color = "red"
    }
    else{
         fav.style.color = "black"
   }
  });
}
// /////***** */ fanction with turnery operatior//////******* */
// fav.style.color = "black"? fav.style.color = "red" : fav.style.color = "black"

 
//////////function delete the all cart from the div element ///////////////////////////************* */

for(let i in deletBtns){
  deletBtns[i].addEventListener('click',function(){
  cards[i].remove()
  total()
  });
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////********************create function  compte quantity and price and add to screen///////////////////////////////************************ */
//////////////********/////////// decriment opetaion did it with dom //////////********************************** */

for(let i in plusBtn ) {

  plusBtn[i].addEventListener("click",function(){
      // qutes[i].innerHTML = Number(qutes[i].innerHTML) +1;
      // qutes[i].innerHTML ++;
      plusBtn[i].nextElementSibling.innerHTML++;
      total()
    });
    
   }



   for (let i in minusBtn) {
    minusBtn[i].addEventListener("click", function () {
        minusBtn[i].previousElementSibling.innerHTML > 0 ? minusBtn[i].previousElementSibling.innerHTML-- : null;
        total()
    })

}



  //  for(let i in minusBtn ) {

  //   minusBtn[i].addEventListener("click",function(){
  //       // qutes[i].innerHTML = Number(qutes[i].innerHTML) -1;
  //       // qutes[i].innerHTML --;
  //       if( minusBtn[i].previousElementSibling.innerHTML > 0) {
  //       minusBtn[i].previousElementSibling.innerHTML --;
  //       } else{
  //       minusBtn.innerHTML = null;
  //       }
  //       total()
  //     });
      
  //    }

     // /////***** */ fanction with turnery operatior//////******* */
    //  minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML -- : null;
  
  

    ////////************/ function Totale price of product from the three cards///////////////******* */

  //   function total() {
  //     let quantities = Array.from(document.querySelectorAll(".qute"))
  //     let unitPrices = Array.from(document.querySelectorAll(".unique-prices"))
  //     let s = 0;
  //     for (let i in unitPrices) {
  //         s = s + Number(unitPrices[i].innerHTML) * Number(quantities[i].innerHTML)
  //     }
  //     // console.log(s)
  //     totalPrice.innerHTML = s
  //     // console.log(totalPrice.innerHTML)
  //     return (totalPrice.innerHTML)
  // }
  










function total(){
  let totalPrice = document.querySelector(".total-price");
  let qutes = Array.from(document.querySelectorAll(".qute"));
let uniquePrices = Array.from(document.querySelectorAll(".unique-prices"));
// console.log(uniquePrices)
// console.log(qutes)
// console.log(totalPrice)
  let s = 0;

  for ( let i in uniquePrices){
    s = s + Number(uniquePrices[i].innerHTML) * Number(qutes[i].innerHTML);
  }
  totalPrice.innerHTML = s;
  // console.log(s)
  // console.log(totalPrice.innerHTML);
  return totalPrice.innerHTML;
  
  
}




















//let add = document.querySelectorAll(".add");
// // add.getElement
// // console.log(add[0])
// let qute = document.getElementsByClassName("qute");

// for(let i =0 ;i < add.length ;i++) {

//   add[i].addEventListener("click",function(){
//     qute[i].innerHTML++;
  
//   });
  
// }

// ///////////////********/////////// decriment opetaion did it with dom //////////********************************** */
// let minus = document.querySelectorAll(".minus");
// // add.getElement
// // console.log(minus[0])


// for(let i =0 ;i < minus.length ;i++) {

//   minus[i].addEventListener("click",function(){
//     qute[i].innerHTML--;
  
//   });
   
// }

// /////////////// function to delete the boxs from div container///////////////********* */
// let container = document.getElementById("container")
//   let boxs=document.getElementsByClassName("box-item")
  
  

// container.addEventListener("click",function(e){
//   let child= boxs[0].parentNode.removeChild(boxs[0])
// },false);










// let totale = document.getElementsByClassName("total-counter")
// // console.log(total)
// let price =document.getElementsByClassName("price")
// // console.log(price)

// function upDateTotale(qute,price){
//     let result = 0 ;
   
//     result+=Math.pow(qute,price)
//     result.appendChild(node)
  
//   }
//   console.log(totale)


  
  


  // for(let i =0 ;i < minus.length ;i++) {
  //   boxs[i].addEventListener("click",function(){
  //     container.removeChild(boxs);
    
  //   });
     
  // }
  // console.log(boxs)


// function upDateTotale(qute,price){
//   var result=0;
//   if(totale >0){
//   result+=Math.pow(qute,price)
//   localStorage.setItem(result)

// } else{
//   localStorage.setItem(total)

// }
// }
// console.log(upDateTotale)













// addEventListener("click" ,function(price,qute){
//   let result = 0;
// for(let i =0 ;i < minus.length ;i++){
//   result+=Math.pow(price,qute);
//   result.innerHTML.replace("$","")

// });

// }


// function upDateTotale(price,qute){
//   let result = 0;
// for(let i =0 ;i < minus.length ;i++){
//   result+=Math.pow(price,qute);

// }
// result.innerHTML.replace("$","")
// }
//   qute.addEventListener("click",function(){
//     total=Math.pow(qute,price).textContent="total";
    
  
//   });
  

// console.log(total)

