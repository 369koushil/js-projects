// const catbtn=document.querySelector('.catfact')
// const URL='https://catfact.ninja/fact?max_length=140'
// const btn=document.querySelector('.btn');
// btn.addEventListener('click',e=>{
//     setTimeout(() => {
//         console.log('hello')
//     }, 2000);
// })

// const pass=prompt('enter password')
// const p= new Promise((resolve,reject)=>{
//     if(pass==1234)resolve('sucess');
//     else reject('blocked')
    
// })
// p.then(s=>{
//     console.log(s)
// },f=>{
//     console.log(f)
// }
// )


// const promise=()=>{
//     const pass=prompt('enter password')
//    return new Promise((resolve,reject)=>{
//     console.log('fetching data...')
//    setTimeout(() => {
//     if(pass==1234)resolve('sucess');
//     else reject('blocked')
//    }, 2000);
    
// })
// }

// promise().then(s=>{
//     console.log(s)
// },f=>{
//     console.log(f)
// }
// )

// async function cat(url){
//     const response=await fetch(url)
//     const fact=await response.json()
//     console.log(`....${fact.fact}`)
// }
// catbtn.addEventListener('click',e=>{
// cat(URL)
// })


const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('p1 resolved')
    }, 2000); 
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('p2 resolved')
    }, 2000);
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('p3 resolved')
    }, 1000); 
})

Promise.all([p1,p2,p3]).then(res=>console.log(res)).catch(e=>console.log('errr ocured'))
Promise.race([p1,p2,p3]).then(res=>console.log(res))