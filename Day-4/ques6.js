
let Num;
let condition;
do {
    Num = prompt("Enter a number greater the 100");
    condition =( Num == null)?true: (Num.trim().length == 0) ? true : (parseInt(Num) <= 100) ? true : false
}
while (condition);

 console.log(`Validation Completed \nNumber=${Num}`);