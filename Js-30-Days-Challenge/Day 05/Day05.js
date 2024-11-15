function say(){
    console.log('hi')
}

const saying=function(){
    console.log('hi')
}
 const says=()=>{
    console.log('hi')
}

const concate=(first,second)=>{
    let c=first.concat(second)
    console.log(c)
}

concate('str','....')


const greet=(naam=exception())=>{
 console.log('hello '+naam)
}



const highfunc=(func,calltime)=>{
      while(calltime>0){
        func()
        calltime-=1
      }
}

highfunc(say,2)

const sum=(a=1,b=1)=>{
 return a+b;
}

const mul=(sum)=>{
 let s=sum()
 return 5*s
}

const nested=(sum,mul)=>{
   return mul(sum)
}

console.log(nested(sum,mul))

function exception(){
    throw new Error('param required');
}

greet()



