let condition = true;
while(condition){
    let num = Number(prompt("Enter the number"))
    condition = (num<101) ? true  : false
    if(condition)
    console.log(`Number is Less: ${num}`)
    else
    console.log(`Numbe: ${num}`)
