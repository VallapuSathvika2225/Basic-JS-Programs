let n=7
function primenum(n){
   if (n<=1){
    return  "not prime";
   }
    for(let i=2;i<n;i++)
    {
        if (n%i==0){
            return "not prime";

        }
    }
     
    return "prime";
}
console.log(primenum(n));