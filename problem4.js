let arr=[2,3,4];
let product=function(acc,el){
  return acc*el;
}
console.log(arr.reduce(product,1));