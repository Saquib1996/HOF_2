
let S="thisracecarisgood";
    let max_Pad=-Infinity;
    for(let i=0;i<S.length;i++)
    {
        for(let j=i;j<S.length;j++)
        {
            let bag="";
            for(let k=i;k<=j;k++)
            {
                bag=bag+S[k];
            }
            let result=CheckPalindrome(bag);
                if(result===true)
                    {
                        if(max_Pad<bag.length)
                            max_Pad=bag.length;
                    }
        }
    }
console.log(max_Pad);
function CheckPalindrome(x)
{
    let str=x;
    let bag="";
    for(let i=str.length-1;i>=0;i--)
    {
         bag=bag+str[i];
    }
    if(bag===str)
        return true;
    else
        return false;
}
