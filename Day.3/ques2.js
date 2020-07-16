let oscfg = prompt("Enter the OS name <space> version of Your device");

let os = oscfg.split(" ")[0];
let version = oscfg.split(" ")[1];

console.log(`The OS Name is ${os} and the version is ${version}`);

