
function div(a,b){
    if(b==0){
        throw new Error('we can tdivide with zero')
    }
    return a/b
}
try{
    div(9,0)
}catch(err){
console.log(err)
}

class ApiKeyError extends Error {
    constructor(msg) {
      super(msg);
    }
  }
  
  function promise1() {
    const pass = prompt('Enter passcode');
    return new Promise((resolve, reject) => {
      if (pass == 123) {
        resolve('Welcome');
      } else {
        reject(new ApiKeyError("Invalid passcode"));
      }
    });
  }
  
  promise1()
    .then(r => console.log(r),rej=>console.log(rej))
    // .catch(err=>console.log(err))


  
    