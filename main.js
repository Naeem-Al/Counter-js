
const zero1 =document.getElementById("zero1");
const Decrese1 =document.getElementById("Decrese1");
const Reset1 =document.getElementById("Reset1");
const Increse1 =document.getElementById("Increse1");
let count=0;

Decrese1.onclick= function(){
    count--;
    zero1.textContent=count

}

Increse1.onclick= function(){
    count++;
    zero1.textContent=count

}
Reset1.onclick= function(){
    count=0;
    zero1.textContent=count

}