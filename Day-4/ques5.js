let salary = 15000 // fixed salaray

sales = Number(prompt("Enter the sales made in a year "));

if(sales>20000){
    console.log(`Total commission earned : ${salary+salary*(10/100)}`)
}
else if (sales>10000 && sales <20001){
    console.log(`Total commission earned : ${salary+salary*(7/100)}`)
}
else if(sales>5000 && sales < 10001){
    console.log(`Total commission earned : ${salary+salary*(5/100)}`)
}
else{
    console.log(`Total commission earned : ${salary+salary*(2/100)}`)
}
