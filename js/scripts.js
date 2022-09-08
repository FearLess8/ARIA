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

let data = [
  {
    id: 1,
    imageUrl:
      "https://ariafarm.ge/ckeditor-images/fasad_1660243591.JPG",
   
    url: "https://google.com",
  },
  {
    id: 2,
    imageUrl: "https://ariafarm.ge/ckeditor-images/%E1%83%A1%E1%83%B0%E1%83%9D%E1%83%9E_1660243225.JPG",
    
    url: "https://google.com",
  },
  {
    id: 3,
    imageUrl:
      "https://ariafarm.ge/ckeditor-images/%E1%83%9B%E1%83%90%E1%83%A6%E1%83%90%E1%83%96%E1%83%98%E1%83%90_1660043474.jpg",
    
    url: "https://google.com",
  },
  
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderConetnt = document.getElementById("slider-content");
const dotBurtuli = document.getElementsByClassName("dot");

let sliderIndex = 0;

function createAtag(item) {
  const tag = document.createElement("a");
  tag.setAttribute("href", item.url);
  tag.classList.add("slide");

  return tag;
}

function createImgtag(item) {
  const tagImage = document.createElement("img");
  tagImage.setAttribute("src", item.imageUrl);
  tagImage.setAttribute("alt", item.title);

  return tagImage;
}



function createDots(item) {
  const dotsParent = document.createElement("div");
  dotsParent.classList.add("dotsParent");

  data.forEach((element) => {
    const dotChild = document.createElement("div");
    dotChild.classList.add("dot");
    dotChild.setAttribute("data-id", element.id - 1);

    dotChild.addEventListener("click", function (event) {
      let id = event.target.getAttribute("data-id");
      sliderIndex = id;
      setSlide();
    });

    dotsParent.appendChild(dotChild);
  });

  return dotsParent;
}
function cuurentDotactive() {
  dotBurtuli[sliderIndex].classList.add("active");
}

function setSlide() {
  sliderConetnt.innerHTML = "";
  const slideItem = createAtag(data[sliderIndex]);
  
  const imgTag = createImgtag(data[sliderIndex]);
  const dots = createDots();

  slideItem.appendChild(imgTag);
  
  sliderConetnt.appendChild(slideItem);
  sliderConetnt.appendChild(dots);

  cuurentDotactive();
  console.log(slideItem);
}

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    setSlide();
    return;
  }
  sliderIndex--;
  // sliderIndex -= 1;
  setSlide();
}
function arrowRIghtClick() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    setSlide();
    return;
  }
  sliderIndex++;
  // sliderIndex += 1;
  setSlide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRIghtClick);
// setInterval(() => {
//   arrowRIghtClick();
// }, 2000);

setSlide();
