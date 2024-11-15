const n=10
// n=12 TypeError: Assignment to constant variable.
console.log(n)
// const n=12 redeclaration not allowed in same scope

let n1=10
console.log(n1)
n1=12 //reassignment allowed
console.log(n1)
// let n1=12  redeclaration not allowed in same scope

console.log(n2)//undefined only for var
var n2=10
var n2=12//redeclration allowed in same scope
n2=14 //reasignment allowed
console.log(n2)

const student={
    Fname:'kkr',
    Age:'20',
    Adult:()=>{student.Age>=18?true:false},
    Voterid:()=>student.Adult?'yes':'No'
}
console.log(typeof student)

const arr=[1,2,3,4,5,6]
console.log(typeof arr)

var num=12
console.log(typeof num)
num+=13
console.log(num)

var s='hello'
console.log(typeof s)

var b=true
console.log(typeof b)

const big=1235n
console.log(typeof big )

let y=null
console.log(typeof y)

let x=undefined
console.log(typeof x)

let a=Symbol('foo')
console.log(typeof a)


// primitive vs refernce datatypes

let x1=10
let y1=x1
x1=20
console.log(x1)
console.log(y1)  //primitve data types stores in stack x1=10 y1=10 when we update x1 it will update x1 value not changes y1

const student1={
    Fname:'kkr',
    Age:'20',
}

const student2=student1
student1.Age=30
console.log(student2.Age)  //refernce data types here variables (refernces are stored in stack but their values are stored in heap here a2 s1 both points to same obj in heap if value gett updated they got updated in both)


let set=new Set([1,2,3,4,4])
console.log(set)

let map=new Map()
//in map key can be any type like another obj or symbol
map.set('agee','123')
map.set(a,'2344')//a is symbol
console.log(map)


