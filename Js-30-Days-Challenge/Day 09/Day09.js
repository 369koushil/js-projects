const body=document.querySelector('body')
const element1=document.createElement('div')
const btn=document.querySelector('button')
element1.setAttribute('class','box1')
body.append(element1)
element1.innerText='mdjfnijifninfsnfjnfnrifi'

function li(cls,pcls,no){
 while(no>0){
    const parent=document.querySelector(pcls);
    const child=document.createElement('li');
    child.className=cls;
    parent.append(child);
    no-=1
 }
}

const a='body'
const cls='list'
li(cls,a,9)

btn.addEventListener('click',e=>{
    console.log(e.target);
    if(body.style.backgroundColor=='red'){
        body.style.backgroundColor='white'
    }
else{
        body.style.backgroundColor='red'
}
})


