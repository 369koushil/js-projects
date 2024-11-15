class person{
    name;
    age;
    constructor(n='na',a='na'){
        this.name=n;
        this.age=a;
    }
    getter(){
        console.log(this.name)
        console.log(this.age)
    }
    setter(n,a){
        this.name=n;
        this.age=a;
    }
    greet(){
console.log('greeting');
    }

}

class student extends person{
   static studentId;
    sId(){
        this.studentId=Math.floor(1000*Math.random())
    }
    update(n,a){
        this.name=n;
        this.age=a;
    }
    static greet(){
        console.log(`hello greetng you`)
    }
}

const p=new person();
p.greet();
p.getter();

const s1= new student();
s1.sId()
console.log(s1.studentId)
student.greet()

s1.update('kkr',12)
console.log(s1.name)
s1.getter()


class bank{
    static BKname;
    static rating;
    static FoY;
    static TOC=0;
    constructor(BKname='na',rating='na',FoY='na'){
this.BKname=BKname;
this.FoY=FoY;
this.rating=rating;
    }

    updateTOC(n){
       this.TOC+=n; 
    }
}

class customer {
    name;
    #age;
    occupation;
    #id;
    constructor(name,age,occ){
        this.name=name;
        this.#age=age;
        this.occupation=occ;
        this.#id=Math.floor(Math.random()*100)
    }
    #incrment(n){
        this.#age+=n;
    }

    ageupdate(n){
        this.#incrment(n)
    }
    


}

b1=new bank('kkr',4.5,1333);
c1=new customer('kkr',13,'army')
c1.ageupdate(5);
// syntax error c1.#age
// syntax err c1.#incrment()