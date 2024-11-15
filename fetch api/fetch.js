let btn=document.querySelector("#btn");
let facts=document.querySelector("#facts");
let url="https://catfact.ninja/fact";


// async function getFact(){
//     console.log("data fetching....");
//     let response= await fetch(url);
//     console.log(response);
//     let data= await response.json();
//     console.log(data);
//     facts.innerText=data.fact;
// }


//promise chaining 
function getFact(){
    console.log("data fetching....");
    return fetch(url);
}





btn.addEventListener("click",()=>{
    getFact().then(resolve =>{
        return resolve.json();
     }).then(resolve =>{                           
         facts.innerText=resolve.fact;
     })
});






  
