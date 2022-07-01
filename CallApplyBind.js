let name = {
  fname : "Bhanuprakash",
  lname: "Mallepoola",
//   printFullName: function(){
//     console.log(this.fname+" "+this.lname)
//   }
}

let  printFullName = function(ht){
    console.log(this.fname+" "+this.lname+" "+ht)
  }

//name.printFullName();

let name2 = {
  fname : "sravan",
  lname: "Mallepoola",
};

//name.printFullName.call(name2);

printFullName.call(name2,'kadiri');
printFullName.apply(name2,['kadiri']);

//Both are same except the way we pass parameters

let copyPrintFullName = printFullName.bind(name2,'kadiri');
copyPrintFullName();

//Bind: it is different from call where it create a copy of the
//object and bind the given function to it and return that copy to
//to declared variable
