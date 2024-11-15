let arr=[2,7,3,4,5]
console.log(arr[0])
console.log(arr[arr.length-1])

let er=[2,7,3,4,5]
er.pop()
console.log(arr)



let length=arr.push(33)
const newarr=arr.pop()
console.log(arr)
arr.unshift(2233)
console.log(arr)
arr.shift()
console.log(arr)

console.log(length)
console.log(newarr)


let arr1=[2,5,1,9,5,3,10,45,23,98,26]
console.log(arr1)
console.log(arr1.map((a)=>{
    return a*=2
}))
console.log(arr1.filter((a)=>a>20))

console.log(arr1.reduce((prev,curr)=>{
    return prev=prev+curr
    
}))

arr1.forEach(e=>{
    console.log(e)
})

let matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(matrix)
console.log(matrix[2])

let o=arr1.slice(0,3)
console.log(o)
let d=arr1.splice(2,5,12)
console.log(d)
console.log(arr1)
