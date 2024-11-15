window.console.log("hello............hi");





let childofbody=document.body.firstElementChild;
console.dir(childofbody);

const lastofbody=document.body.lastElementChild;
console.dir(lastofbody);

const last=document.getElementsByClassName("one")[0].lastElementChild;
console.log(last);

console.dir(document.getElementsByClassName("sub")[0].firstElementChild);

const laast=document.getElementsByTagName("div")[0].firstElementChild;
console.log(laast);
console.dir(laast);


let querryselect=document.querySelector(".one");  // first eleemetn of class gives
console.log(querryselect);

let querryofselect=document.querySelectorAll("#q");
console.log(querryofselect);



console.log(document.body.tagName);


let s=document.getElementsByClassName("one");

console.log(s[0].tagName);
console.log(laast.tagName);

console.log(laast.innerText);
console.log(s[0].innerHTML);
console.log(document.getElementById("g").textContent);

console.log(document.body.firstElementChild.nextElementSibling);


let n1=document.createElement('div')
let n2=document.createElement('div')
n1.setAttribute("class","new")
let div=document.getElementsByTagName('div')
console.log(div)
div[0].append(n1)
n1.style.height='100px'
n1.style.width='200px'
n1.style.backgroundColor='pink'

n2.style.height='10px'
n2.style.width='20px'
n2.style.backgroundColor='red'

n1.after(n2)


let btn=document.querySelector('.mode button')
btn.addEventListener('click',e=>{
   console.log(e.target)
   console.log(e.clientX)
   console.log(e.offsetX)
})


student={
    fname:'kkr',
    lName:'reddy',
    marks:100,
    grade:function(){
       student.marks>=80?console.log("A"):console.log('B')
    }
}


student_details={
    credits:10,
    cgpa:0.0,
    ncgpa:()=>{
       student_details.credits>8?console.log("passed"):console.log("failed")
    }
}

student.grade()

student.__proto__=student_details
student.ncgpa()
console.log(student.credits)


class myclass{
     students=null
     constructor(n){
        this.students=n
     }

    
}

let m1=new myclass()


class customException extends Error{
    constructor(msg){
        super(msg)
    }
}

try{
    let x=prompt('enter no')
    let y=prompt("enter no")
    console.log(x/y)
}

catch(e){
    console.log('printing')
}