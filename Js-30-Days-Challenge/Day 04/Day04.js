
const tableprinter=(numb)=>{
    for(let i=1;i<11;i++){
        console.log(`${numb} x ${i} = ${numb*i}`)
    }
}

tableprinter(5)

const factorial=(numb)=>{
    let fact=1
    do{
         fact*=numb
         numb-=1
    }while(numb>0)
console.log(fact)
}

factorial(5)


for(let i=1;i<6;i++){
    let row=''
    for(let j=1;j<i;j++){
        row+='*'
    }console.log(row)
}
for(let i=0;i<6;i++){
    console.log("*".repeat(i))
}

console.log('')

for(let i=6;i>0;i--){
    console.log("*".repeat(i))
}


for(let i=0;i<10;i++){
    if(i===7){
        continue
    }else{
        console.log(i)
    }
}


function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars + spaces);
    }
}

printPyramid(5);
function printPyramidd(rows) {
    for (let i = rows; i > 0; i--) {
        const spaces = ' '.repeat(rows - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars + spaces);
    }
}

printPyramidd(5);


function show(){
    console.log('wow')
}

// window['show']()


const obj={
    name:'kkr',
    age:12
}
console.log(obj['name']);