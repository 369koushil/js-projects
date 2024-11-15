//entire module export by making it as an object and use it as properties


    function greet(){
        console.log('heloo')
    }
    
    const add=(a,b)=>{
        return a+b;
    }
    
    const age=12;
const objects={
    greet,
    add,
    age
}

export default objects 