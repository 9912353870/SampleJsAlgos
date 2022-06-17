
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let inpArr = input.split("\n")[1]?.split(" ");
    // let output = inpArr.reduce((str,item)=>{
    //     return item%10
    // },'')

    let output = inpArr[inpArr.length-1] % 10;
    
    process.stdout.write(output === 0 ? "Yes" : "No" +"\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
