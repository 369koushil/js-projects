const parent=document.querySelector('.parent')
const submit=document.querySelector('.submit')
const input=document.querySelector('#input')
const body=document.querySelector('body')
const observebtn=document.querySelector('.observebtn')
const addbtn=document.querySelector('.addbtn');
const removebtn=document.querySelector('.removebtn');
const div=document.querySelector('div')
parent.addEventListener('mouseover',e=>{
    console.log(e.target)
    e.target.style.listStyleType='square'
})

submit.addEventListener('click',(e)=>{
  e.preventDefault()
})

input.addEventListener('keydown',e=>{
  console.log(e.code)
})


const observer=new MutationObserver((MutationList,observr)=>{
  for(const mutation of MutationList){console.log(mutation)}
})

const config = { attributes: true, childList: true, subtree: true };



addbtn.addEventListener('click',e=>{
 console.log(e.target)
 const newelement=document.createElement('div')
 body.append(newelement)
})


removebtn.addEventListener('click',e=>{
const removenode=observebtn.nextSibling;
body.removeChild(removenode)
})

observebtn.addEventListener('click',e=>{
  if(observebtn.textContent=='startobserve'){
    observebtn.textContent='stop observe';
  observer.observe(body,config);
  }
else{
  observebtn.textContent='startobserve';
observer.disconnect()
}

})