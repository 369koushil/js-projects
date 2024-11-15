const name = "kkr";
const age = 18;
const print = `'my name is ${name} and my age is ${age}'`;

const [fname, fage, income] = ["kkr", 23, "12k"];
console.log(fname);

const person = {
  oname: "kkr",
  oage: 12,
  oincome: "12k",
};
const { oname, oage, oincome } = person;
console.log(oname);

const arr = [1, 2, 3, 4, 5];
const newarr = [...arr, 6, 7, 8, 9];
console.log(newarr);

const cutomReduce = (...numbs) => {
  return numbs.reduce((prev, curr) => prev + curr);
};

console.log(cutomReduce(1, 2, 3, 4));

const p1={
    pname:'kkr',
    page:12,
    pcity:'usa',
    pincome:'13k'
}
const {pname,page,...others}=p1
console.log(others)

const arr1=[1,2,3,4,5]
const[a,b,c,...remaining]=arr1
console.log(a)
console.log(b)
console.log(c)
console.log(remaining)

// enhanced__object__literal

const ename='kkr'
const eage=12
const propname='income'
const ep={
    ename,
    eage,
    print(){
        console.log(this.ename,this.eage)
    },
    [propname]:12000

}
console.log(ep)