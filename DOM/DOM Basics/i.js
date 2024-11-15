// const r=document.body.firstElementChild.innerText+=" from apna college";
// console.log(r);

// const p=document.body.getElementsByClassName("box");
// console.log(p);
// p[0].innerText="box1";
// p[1].innerText="box2";
// p[2].innerText="box3";


let s=document.querySelector("div");
console.log(s.getAttribute("class"));
console.log(s.setAttribute("id","two"));

let g=document.createElement("h1");
g.innerHTML="<i>kkr</i>";
document.body.prepend(g);

let p=document.createElement("div");
let d=document.body.lastElementChild;
d.before(p);
p.style.height="200px";
p.style.backgroundColor="blue";
p.innerText="why";
p.style.color="white";

p.remove();

let y=document.querySelectorAll(".box");
console.log(y);

for(let val of y){
  val.classList.add("boxing","boxx");   // class list usage adding extra class name 
}

y[0].classList.remove("boxing");
y[2].classList.replace("boxing","box");

let e=document.createElement("div");
e.innerText="happy";

let k=document.querySelector("#five");
k.appendChild(e);  //add child
k.removeChild(e);   // remove child


