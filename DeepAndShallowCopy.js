/*---------shallow copying-----------------*/
let x = [1,2,3];
/*
At this point in memory an array is created and a pointer is assigned to the
intial value of array. 
*/
let y = x;

/*
when you perform the above action it will not create a new array but it will
create a new reference to the exisisting array and 'y' is the new reference to
the array 'x'.
*/

y[0] = 4;
console.log(y);

/*
As y is the new reference if you change anything in y that refers the changes 
in x memory space and when you try to access x or y you get the updated values
only.
*/

console.log(x);


//this is called "shallow copying"

/*---------Deep Copy and spread operator (& pitfall)-----------------*/
let a = [1,2,[3,[4,5]]];

/*Deep copy: The below provides deep copy of array a and assign it to 
  b and as the new copy of 'a' array is entirely created so it will not
  any side effects on "b" when we change anything in "a" array.
*/
let b = [...a];

b[2] = [...a[2]];
/*
try commenting the above line you can see the ...Spread doing the 
deep copy for top most elements and shallow copy for inner elements
this is a pitfall using the spread. This can be overcome by spreading
the nested elements also seperatly.
*/

b[2][1] = [6,8];

console.log(a[2][1]);

//JSON.parse(JSON.stringify(nestedObject)); --> Deep copy
