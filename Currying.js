//Function currying using: bind method

function printMutiplesOf(x,y){
  for(let i = 1; i<= y; i++){
    console.log(x + "X" + i + "=" + x*i);
  }
}

let mutiplesUpto = printMutiplesOf.bind(this,2);
//mutiplesUpto(10);

let mutiplesUpto2 = printMutiplesOf.bind(this);
//mutiplesUpto2(2,10);

let mutiplesUpto3 = printMutiplesOf.bind(this,2,5);
//mutiplesUpto3();

//Function currying using: closures method
function printMutiplesOfClouser(x){
  return function(y){
    for(let i = 1; i<= y; i++){
      console.log(x + "X" + i + "=" + x*i);
    }
  }
}

let test1 = printMutiplesOfClouser(2);
//test1(10);

 printMutiplesOfClouser(2)(10);



