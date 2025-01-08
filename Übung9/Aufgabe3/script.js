document.querySelector("section")
.addEventListener("click",
function() {
console.log("section geklickt!");
}, true);
document.querySelector("p")
.addEventListener("click",
function() {
console.log("p geklickt!");
}
);
document.getElementById("b2").onclick
= function() {
console.log("button2 geklickt!");
};
function clickBtn() {
console.log("button1 geklickt!");
};
