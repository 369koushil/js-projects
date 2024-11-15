
const day=(key)=>{

    switch(key){
        case(key===1):console.log('sunday')
        break;
        case (key===2):console.log('Tuesday')
        break;
        case (key==3):console.log('wednesday')
        break;
        case (key===4):console.log('thursday')
        break;
        case (key===5):console.log('friday')
        break;
        case( key===6):console.log('saturday')
        break;
        default:console.log('sunday')
        
    }
}

day(99)

const grade = (m) => {
    switch (m) {
        case (m >= 90):
            console.log('A');
            break;
        case (m >= 80 && m < 90):
            console.log('B');
            break;
        case (m >= 70 && m < 80):
            console.log('C');
            break;
        case (m >= 60 && m < 70):
            console.log('D');
            break;
        case (m >= 50 && m < 60):
            console.log('E');
            break;
        case (m >= 40 && m < 50):
            console.log('P');
            break;
        default:
            console.log('F');
    }
}

grade(0); 


const evencheck=(m)=>{
    return m%2===0?true:false
}
console.log(evencheck(9))


const yearcheck=(y)=>{
    if(y%4==0){
        if(y%100==0){
            if(y%400==0){
                console.log('leap yr')
            }else{console.log('not leap yr')}
        }
    }else{
        console.log('not leap yr')
    }
}

yearcheck(1700)