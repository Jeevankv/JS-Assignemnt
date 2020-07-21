let n = Number(prompt("Enter the Number"));

let arrayNum = [];
for(let i =0 ;i<n;i++){
    arrayNum.push(i+1)
}
console.log(arrayNum);
let oddNum = arrayNum.filter(item=>item%2==1);
console.log(`Odd Numbers : ${oddNum}`);
let cubes = oddNum.map(item=> item**3);
console.log(`Cubes: ${cubes}`)
