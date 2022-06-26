let arr=[2, 4, 5, 3, 6, 8];
let out=arr.filter(function(el,index){
  if(el%2===0 && index%2===0)
    return el;
});
console.log(out);