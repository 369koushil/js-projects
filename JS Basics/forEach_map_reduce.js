// function print(){
//     console.log("hello");
// }
// function dupPrint(func){               
//     return func;
// }
// const returnedfunc=dupPrint(print);   // passing function as argument and assigning it to new variable so that variable get the def of that function same as the arrow function ...now we give the argument to the variable ** in JS functions are first class citizens
// returnedfunc("hello");          


// let arr=[1,2,3,4,5];
// arr.forEach(function print(val){
//     console.log(val);
// })

// arr.forEach(function sum(val,idx){   //used for adding num to each elemnt 
//    arr[idx]=val+2;
// })
// console.log(arr);


// let arr2=[11,22,33,44,55];
// const array=arr2.map((val)=> val+2);  // same as forEach works on each and every element but gives new array or return new array we stored it and again printed.
// console.log(array);         


// let arr3=[100,101,102,103];
// let s=arr3.reduce((prev,current)=>{    // returns single value from more elements
//    return prev=prev+current;
// })
// console.log(s);


// let arr4=[11,22,33,44,56,78,99,100,110];
// const array=arr4.filter((val)=>{ //filter return new array but based on filter/condition
//     return val%11===0;
// })
// console.log(array);


// function fuck(a){
//     return a%2===0;
// }
// console.log(fuck(4));           condition apply at return statement



// let marks=[87,93,90,67,65,99,97];

// let a1=marks.filter((val)=>{
//     return val>90;
// })

// console.log(a1);



// let n=prompt("enter any number");
// function cArr(n) {
//     let i = 0;
//     let arr = [];
//     while (i <= n) {
//         arr.push(i);
//         i++;
//     }
//     arr.shift();
//     return arr;
// }
// var array=cArr(n);
// console.log(array);
                                                         //  **imp** remember 
                                                         // use reduce to give single output fot many outputs very useful


// const s=array.reduce((prev,current)=>{
//     return prev+current;
// });

// console.log(s);

// const factorial=array.reduce((val,curr)=>{
//     return val*curr;
// })

// console.log(factorial);