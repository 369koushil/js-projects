window.localStorage.setItem("name","kkr");
window.sessionStorage.setItem("name","kkr");

// window.sessionStorage["name"]="kkr";
// window.sessionStorage.color="yellow";

window.sessionStorage.getItem("name");
window.sessionStorage.key(0);
window.localStorage.clear();
window.sessionStorage.length;
window.sessionStorage.removeItem("name");
window.localStorage.setItem("obj1",{name:"kkr"});//  return object object we have to convert to JSON format
window.localStorage.setItem("obj2",JSON.stringify({name:"kkr"}));

//setItem() getItem() clear() length removeItem() key() impp
// always you have push data in JSON fromat only 
//session local storage are objects containing key and value pairs
//sessionstorage valid only upto the tab get closed
//localstorage valid forever until cache get cleared or we clear maunually
