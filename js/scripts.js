let navigation =["Home","ფერმა" ,"მაღაზიები" ,"საწარმო","გალერეა","კონტაქტი" ];

let links =[ "index.html","farm.html" ,"shops.html" ,"factory.html","product.html","contacts.html"];

let navlen = navigation.length;

let text ="<ul>";

for(let i=0; i<navlen; i++){
    text += '<li><a href=' + links[i] +">" + navigation[i] + "</a></li>";
}

text += "</ul>";
console.log(text);
document.getElementById("nav").innerHTML = text;

document.getElementById("nav").style.color = "#ffffff"

const navbarli = document.querySelector(".navbar li");
const header = document.querySelector("header", );

window.addEventListener("scroll", e => {
  if (window.scrollY > 100) {
    header.classList.add("header-scroll");
    navbarli.classList.add("navbar-li-scroll");
  } else {
    header.classList.remove("header-scroll");
    navbarli.classList.remove("navbar-li-scroll");
  }
});


function gamochena(){
  document.getElementById("chatbox").
   style.display="block";
   document.getElementById("chat").
   style.display="none"
  

}
function gaqroba(){
  document.getElementById("chatbox").
   style.display="none";
   document.getElementById("chat").
   style.display="block"
}
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})