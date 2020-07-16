let marks = +prompt("Enter Your Marks");

if(35<=marks && marks <50){
    console.log(`Marks is ${marks} and the Grade is 'C'`);
}
else if(50<=marks&&marks<85){
    console.log(`Marks is ${marks} and the Grade is 'B'`);
}
else if (marks<35){
    console.log(`Marks is ${marks} and the result is 'Fail`)
}
else {
    console.log(`Marks is ${marks} and the Grade is 'A'`);
}

