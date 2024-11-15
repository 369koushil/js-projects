let student={
   fName:"srk",
   lName:"king",
   age:19,
   printDetails:function(){
    console.log(this.fName,this.lName,this.age);
   }
}

student.printDetails();

let certification={
    printpass:function(h){
        h>=18?console.log("pass"):console.log("fail")
    }
}

certification.printpass(18);

student.__proto__=certification;

student.printpass(78);

class car{
    constructor(carname){
     this.carname=carname;
     console.log(carname);
    }

    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

}

let car1=new car("toyata");
car1.start();
car1.stop();
console.log(car1);

class newCar extends car{
    gear(h){
        console.log(`this car has ${h} no of gears`)
    }

    constructor(g){
        super(g);
      console.log(`modified ${g} version`)
    }

    choke(){
        super.start();
        super.stop();
        super.start();
    }
}

let ncar=new newCar("toyata");
ncar.gear(9);
ncar.choke();



let ncar1=new car("j");
ncar1.choke();