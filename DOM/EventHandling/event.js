
let b1=document.querySelectorAll("div");
b1[0].onmouseover=()=>{
    b1[0].innerText="hello hi my name is tony";
    console.log("hi");
    b1[0].style.backgroundColor="red";
}

let btn=document.createElement("button");
btn.innerHTML="<b>EDITH</b>";
document.body.prepend(btn);
btn.setAttribute("class","btn");
btn.onclick=(evt_obj)=>{
      alert("scanning your eyes");
      console.log(evt_obj.type , evt_obj.target);
      console.log(evt_obj.clientX,evt_obj.clientY);
}

let btnn=document.querySelector("#mode");
let color="white";
btnn.addEventListener("click",(e)=>{
    if(color==="white"){
        document.body.classList.replace("light","dark");
        color="black";
        console.log(e.type,e.clientX,e.clientY,e.target,color,e);
    }
    else{
        document.body.classList.replace("dark","light");
        color="white";
        console.log(e.type,e.clientX,e.clientY,e.target,color);
    }
})



