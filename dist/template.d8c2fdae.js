const menu = document.querySelector(".menu");
const list = document.querySelector(".list");
const close = document.querySelector(".icon");
const mage = document.querySelector(".mage");
const game = document.querySelector(".game");
const remover1 = document.querySelector(".remover1");
const gDev = document.querySelector(".gDev");
const x = document.querySelector(".x");
menu.addEventListener("click", function() {
    // list.classList.remove("hidden")
    list.style.display = "block";
});
const none = function() {
    list.style.display = "none";
    list.style.transition = "2s";
};
close.addEventListener("click", none);
// list.classList.remove("hidden")
// list.style.display="none"
mage.addEventListener("click", none);
// list.classList.remove("hidden")
// list.style.display="none"
document.body.addEventListener("keydown", function(e) {
    if (e.key === "Escape") none();
    else if (e.key === "o") list.style.display = "block";
});
game.addEventListener("click", function(e) {
    e.preventDefault();
    remover1.style.display = "none";
    gDev.style.display = "block";
});
x.addEventListener("click", function(e) {
    remover1.style.display = "block";
    gDev.style.display = "none";
});
// const j = document.querySelector(".jomT");
// const mov= document.querySelector(".mov");
// j.addEventListener("click",function(){
// mov.classList.add("move")
// }) 
const animation = document.querySelector(".animation");
animation.style.color = "white";
const text = [
    "Welcome",
    "back",
    "to",
    "adam",
    "webpage"
];
let count = 0;
const clan = setInterval(()=>{
    animation.textContent = text[count];
    count++;
    if (count === text.length) count = 0;
}, 4300);

//# sourceMappingURL=template.d8c2fdae.js.map
