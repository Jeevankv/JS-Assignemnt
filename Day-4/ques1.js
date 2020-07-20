
for (let index = 1; index < 101; index++) {
    if(index % 3==0 && index % 5 == 0){
        console.log(index,"fizzbuzz")
    }

    if (index % 3== 0){
        console.log(index,"fizz");
    }
    if(index % 5 == 0){
        console.log(index,"buzz");
    } 
}