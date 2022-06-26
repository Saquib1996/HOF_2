let arr=["A", "Good", "Problem"];
let sum=0;
let out=arr.filter(function(el){
  if(el.length%2 !==0 )
    sum=sum+el.length;
})
console.log(sum);
