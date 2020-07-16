let number = +prompt("Enter the Number");

function analyse(number){
    if(number%2==0){
        return "Even";
    }
    else{
        return "Odd";
    } 
}

let result = analyse(number);
console.log(`The Entered number is ${number} and the number is ${result}`);