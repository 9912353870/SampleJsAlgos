

let obj =  {
    employeeName: "John Doe",
    employeeId: 27,
    salary: {
        year19: "400000INR",
        year20: "500000INR",
        year21: "650000INR"
    },
    address: {
        locality: {
            address1: "1600 pebble road",
            address2: "Nearby XYZ Bank",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    }
}

let flatened = {};
function flatObject(obj,prependText){
 Object.keys(obj).forEach(item => {
   let test = obj[item];
   if(typeof test === 'object'){
     flatObject(test,prependText+"_"+item)
   }
   else{
     flatened[prependText+"_"+item] = obj[item];
   } 
 })
}
flatObject(obj,'office');
console.log(flatened)
