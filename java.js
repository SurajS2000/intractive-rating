const maincontainer = document.querySelector(".container");
const thank = document.querySelector(".container2")
const submitButton=document.getElementById("submit");
const rates=document.querySelectorAll(".btn");
const rating=document.getElementById("rating");
let rate=5;

submitButton.addEventListener("click",function(){
    thank.classList.remove("hidden");
    maincontainer.style.display="none";
    rating.innerHTML=rate;
})
for(var i=0;i<rates.length;i++){
    rates[i].addEventListener("click",function(){rate=this.innerHTML})
}