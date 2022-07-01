let name = {
  fname : "Bhanuprakash",
  lname: "Mallepoola",
}

 let printFullName = function(ht,st){
    console.log(this.fname+" "+this.lname+" "+ht+" "+st);
  };

//Own polyfill of bind
//Own implementation of bind


//Regular implementation : polyfill
let printMyName = printFullName.bind(name)
printMyName();

Function.prototype.mybind = function(...args){
   if(!args.length) return;
   let obj = this,
       params = args.slice(1);
   
  return function (...arg2) {
    obj.apply(args[0],[...params,...arg2]);
  }
}

let printMyName2 =  printFullName.mybind(name,'kadiri');
printMyName2("bhanu");
