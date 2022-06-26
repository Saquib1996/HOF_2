let arr=[1, 2, 3, 4];
let sum=0;
arr.forEach(function(el){
  if(el%2 !== 0)
    sum=sum+el;
});
console.log(sum);
