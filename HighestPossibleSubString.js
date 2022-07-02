let str = "geeksforgeeks";

//let uniqueCharacterSet = [...new Set(str.toLowerCase())].sort().join('');
 
function findAllPossibleSubSets(text, sortReq = false){
  let set = [];
  let reg = /([a-zA-Z]).*?\1/;
  for(let i = 0; i<= text.length; i++){
    for(let j = i; j<= text.length; j++){
      let currStr = text.slice(i,j);
      if(currStr && !reg.test(currStr)){
        set.push(currStr);
      } 
    }
  }
  
  return sortReq ? set.sort((a,b) => b.length - a.length) : set;
}

let allStr = findAllPossibleSubSets(str, true);
console.log(returnHighestPossibleSubStr(str));
function returnHighestPossibleSubStr(){
 let highestSubStr;
 for(let i = 0; i< allStr.length; i++){
    if(str.indexOf(allStr[i]) > -1){
      highestSubStr = allStr[i];
      break;
    }
  }
  
  return highestSubStr ? highestSubStr.length : 0;
}

