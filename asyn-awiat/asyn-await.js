function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        resolve(data); // Fulfill the promise with data
      }, 2000);
    });
  }
  function fetchData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        resolve(data); // Fulfill the promise with data
      }, 2000);
    });
  }
  function fetchData3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        resolve(data); // Fulfill the promise with data
      }, 0);
    });
  }
  
  async function fetchAndProcessData() {

      const data1 = await fetchData1(); // await pause excution until promise reolsved
      console.log("Data 1:", data1);
      console.log('hello')
      
      const data2 = await fetchData2(); // await pause excution until promise reolsved
      console.log("Data 2:", data2);
      
      const data3 = await fetchData3(); // await pause excution until promise reolsved
      console.log("Data 3:", data3);
    
  }
  
  fetchAndProcessData();
  

//but other get excuted 
  setTimeout(()=>{
  console.log('hello') 
  },200)

console.log('helllllll')
  
  setTimeout(()=>{
    console.log('hello')
    },200)
  

    
  setTimeout(()=>{
    console.log('hello')
    },200)



  let str='123'
  let numb=parseInt(str)
  console.log(typeof(numb))



let num1=true;
let num2=false;



 

