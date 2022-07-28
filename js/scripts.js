let navigation =["Home","ფერმა" ,"პროდუქცია" ,"საწარმო","მაღაზიები","გალერეა","კონტაქტი" ];

let links =[ "index.html","farm.html" , "product.html","factory.html","shops.html","galery.html","contacts.html"];

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

