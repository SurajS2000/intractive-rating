const maincontainer = document.querySelector(".container");
const thank = document.querySelector(".container2")
const submitButton=document.getElementsByClassName("submit");
const rates=document.querySelectorAll(".btn");
const rating=document.getElementById("rating");
let rate=5;

function thankyou() {
    thank.classList.remove("hidden");
    maincontainer.style.display="none";
}
function one(){
    rate=1;
    rating.innerHTML=rate
}
function two(){
    rate=2;
    rating.innerHTML=rate
}
function three(){
    rate=3;
    rating.innerHTML=rate
}
function four(){
    rate=4;
    rating.innerHTML=rate
}
function five(){
    rate=5;
    rating.innerHTML=rate
}