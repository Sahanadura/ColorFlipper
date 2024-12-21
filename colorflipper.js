const btn=document.getElementById("button");
const colors=["red","green","blue","purple","pink","aqua"];
const color=document.querySelector(".color");
const center=document.querySelector(".center");

btn.addEventListener("click",change);

function change(){
    const randomnumber=Math.floor(Math.random() *colors.length);
     
    color.textContent=colors[randomnumber];

    center.style.backgroundColor=colors[randomnumber];

}

