
let percentage = function(num,per){
    return (num)*(per/100)
}

while(true){
let operator = prompt("press1: Addition, press2: Subtraction, 3:Multiplication 4:Division, 5: Percentage : 6: SquareRoot")
if (operator == '5'){
    let num = prompt("Enter the number");
    let per = prompt("Enter the percentage required");
    let result=percentage(num,per);
    alert(result);
}
else if(operator== '6'){
    let num = prompt("Enter the number");
    alert(Math.sqrt(num));
}
else{
    let operand1 = Number(prompt("Enter first operand"));
    let operand2 = Number(prompt("Enter second operand"));
switch(operator){
    
    case '1' : let result = operand1 + operand2;
        alert(result);
        break;
    case '2': let res1 = operand1 - operand2;
        alert(res1);
        break;
    case '4' : let res2 = operand1 / operand2;
        alert(res2);
        break;
    case '3' : let res3 = operand1 * operand2;
        alert(res3);
        break;
    default :
    alert("Invalid input");
        break;
    }
}
if (confirm("Do You Wish to continue?")){
    continue;
}
else{
    break;
}

}





