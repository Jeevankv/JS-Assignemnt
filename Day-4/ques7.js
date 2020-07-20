let num=prompt("enter the no.:")
printPrime(num);

function isprime(num1){
    if(num1<=1){
        return false;
    }
    for(let i=2;i<num1;i++){
        if(num1%i==0){
            return false;
        }
    }
    return true;
}

function printPrime(n){
    for(let i=2;i<=n;i++){
        if(isprime(i)){
        console.log(i);}
    }
}