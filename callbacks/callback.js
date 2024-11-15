

// function sum(a,b){
//     return a+b;
// }
// function calculator(a,b,sum){
// console.log(sum(a,b));
// }

// setTimeout(()=>{
//     calculator(9,1,sum)
// }, 2000);

// console.log("sum..............");




// function getData(id,getnextdata){

//     setTimeout(()=>{
//      console.log("data ",id);

//      if(getnextdata){
//         getnextdata();
//      }
//     },2000);
// }


// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);          // calbackhell
//         });
//     });
// });



// function getData(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",id);
//             resolve("sucess");
//         },2000);
//     });
// }

// let p=getData(1);
// console.log(p); // printing return value by getdata() which is the promise checking its state after excution
// p.then((res)=>{
//     console.log(res)
// })

// setTimeout(()=>{
//     console.log(p)  // printing return value by getdata() which is the promise checking its state after excutio
// },3000);



//promise chaining

// getData(1).then(()=>{
//        return getData(2)
// }).then(()=>{
//     return getData(3)
// }).then(()=>{
//     return getData(4)
// })



//   function getData(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             console.log(id," data");
//             resolve("success");
//         }, 3000);
//     })

// }

// async function getAllData(){
//     await getData(1);                  //two asunc function runs paralley here await only can make to wait next line code in its async function
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
// }

// getAllData();

 

// //iife method representation immediately invoked function expression one time used just after creation it get invoked
// (async ()=>{
//     await getData(10);
//     await getData(11);   
// })();



let r=new Promise((resolve,reject)=>{
    console.log("hi");
    // resolve("sucess");
    throw new Error('404')
});

r.finally(()=>{
    console.log("fuckk")
})

r.catch(err=>{
    console.log(err)
})

console.log(r);


// let base_url = "https://cat-fact.herokuapp.com/facts/random";

// function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         let req = new XMLHttpRequest();
//         req.open('GET', url);
//         req.onload = () => {
//             if (req.status === 200) {
//                 resolve(req.response);
//             } else {
//                 reject("There is an Error!");
//             }
//         };
//         req.onerror = () => {
//             reject("Request failed!");
//         };
//         req.send();
//     });
// }

// const promise = getPromise(base_url);

// const consumer = () => {
//     promise.then(
//         (result) => {
//             console.log({ result });
//         },
//         (error) => {
//             console.error('Error:', error);
//         }
//     );
// };

// consumer();
