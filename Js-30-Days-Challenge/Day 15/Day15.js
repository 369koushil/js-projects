//understanding closures

function sum(a, b) {
  return a + b;
}

function cal(a, b) {
  return sum(a, b);
}

console.log(cal(1, 2));

//practical understanding of closures

function name(name) {
  const p = name;
  function greet() {
    console.log(`heloo ${p}`);
  }
  return greet();
}

name("kkr");

function generateID() {
  let id = Math.floor(Math.random() * 6);
  console.log(id);
  function newID() {
    id++;
    console.log(id);
  }
  return newID();
}
generateID();

//iife
(function () {
  console.log("hello");
})();

const arr = [];
for (let i = 0; i <= 10; i++) {
  arr.push(
    (function (index) {
      return function () {
        console.log(`func${index}`);
      };
    })(i)
  );
}

console.log(arr);
arr[0]();
arr[1]();

//module to manage items in list
const listModule = (function () {
  const list = [];

  function additem(a) {
    list.push(a);
    console.log(`item added--->${a}`);
  }
  function del() {
    if (list.length > 0) list.pop();
    else {
      console.log("list is empty");
    }
  }
  function listitems() {
    console.log(Object.values(list));
  }

  return {
    additem,
    del,
    listitems,
  };
})();

const{additem,del,listitems}=listModule;

additem("shampoo");
additem("laser");
additem("eraser");
listitems();

function factorial(n) {
  let a = n;
  function aa() {
    let f = 1 * a;
    a--;
    function bb() {
      f = f * a;
      a--;
      function cc() {
        console.log((f = f * a));
      }
      return cc();
    }
    return bb();
  }
  return aa();
}

factorial(3);



(
  function(){
    return function(){
      console.log("hi")
    }
  }
)()();

