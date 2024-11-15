const book = {
  name: "Code",
  POY: 2007,
  Author: "Dacse",
  Price: "$13.09",
  update: function (p = "13.09", y = 2007) {
    this.Price = `$${p}`;
    this.POY = y;
  },
  details: function(){
    for (let i in this) {
      console.log(this[i]);
    }
  },
};

book.update();
console.log(book.Price);
book.details();

console.log(Object.keys(book));
console.log(Object.values(book));

const library = {
  name: "krk",
  books: {
    book1: {
      name: "kkr",
      author: "kkr",
    },
    book2: {
      name: "srk",
      author: "srk",
    },
    book3: {
      name: "rrk",
      author: "rrk",
    },
  },
  details: function () {
    for (let i in this) {
        if(this[i]==this.details){
            break
        }
      console.log(this[i]);
    }
  },
};

library.details();




const obj={
  func:function outer(){
    console.log(this)
    inner()
    function inner(){
      console.log(this)
    }
  }
}

obj.func()

const entries=Object.entries(book)
// console.log(entries)
entries.forEach(([k,v])=>{
  console.log(`${k}:${v}`);
})
// for(let [key,value]of entries){
// console.log(`${key}:${value}`)
// }



