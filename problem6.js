let arr=[1, 2, 3, 4, 5, 6];
let sum=0;
arr.forEach(function(el){
  if(el%3===0)
    sum=sum+(el*el*el);
});
console.log(sum);