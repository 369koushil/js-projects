let choices =document.querySelectorAll(".imgs");
var u=document.querySelector("#user");
var c=document.querySelector("#comp");
var m=document.querySelector("#mmm");

let userpoint=0;
let comppoints=0;



function generate(){
      let arr=["rock","paper","scissor"];
      let idx=Math.floor(Math.random()*3);
    return arr[idx];
}


const determinewin=(f,j)=>{
    if(f==j){
        return 'draw';
    }
    else if(f=="rock"&&j=="scissor"||f=="scissor"&&j=="paper"||f=="paper"&&j=="rock"){
        return 'user';
    }
    else{
        return 'comp';
    }
}

let updatescore=(w)=>{
    if(w=="user"){
        userpoint++;
        u.innerText=userpoint;
        m.innerText="you won :)"
        m.style.backgroundColor="green";
        m.style.color='white';

    }
    else if(w=="comp"){
        comppoints++;
        c.innerText=comppoints;
        m.innerText="you lost :("
        m.style.backgroundColor="red";
        m.style.color='white';

    }

    else{
        m.innerText="Draw"
        m.style.backgroundColor="grey";
        m.style.color='white';
    }


}
for(let c of choices){
    c.addEventListener("click",()=>{
       let userchoice=c.getAttribute("id");
       let compchoice=generate();
       let winner=determinewin(userchoice,compchoice);
       updatescore(winner);
    })
}