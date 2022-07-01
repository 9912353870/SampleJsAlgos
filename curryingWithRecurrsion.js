let sum = function (a){
  return function (b){
    return  b ? sum(a+b) : a;
  }
}

let sum1 = a => b => b ? sum(a+b) : a;
console.log(sum1(1)(2)(3)(4)(5)(6)())
