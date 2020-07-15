let text = "Hey this is Javascript code";
// search
let position = text.search;("Javascript");
console.log(position);

// slice()
let res = text.slice(12, 23);
console.log(res);
let res1 = text.slice(-15,-5); // negative indicies
console.log(res1);
//substring()
let res2 = text.substring(12,23);
console.log(res2);
//substr()
let res3 = text.substr(12,10);
console.log(res3);
//replace()
let replce = text.replace;("Javascript","python");
console.log(replce);
//trim
let text1 = "      HTML           ";
console.log(text1.trim());
//split
let email = "virat.kohli@letsUpgrade.com";
user = email.split("@")[0];
fname = user.split(".")[0];
lname = user.split(".")[1];
console.log(user,fname,lname);

let arr = ["Professor","Denver","Moscow","Nirobi","Rio","Tokyo"];

let arr2 = ["Berlin","oslo","Helsinki"];

let arr3 = arr.concat(arr2);
console.log(arr3);

// sort()
console.log(arr3.sort());
//indexOf()
console.log(arr3.indexOf("Professor"));
//isArray()
console.log(Array.isArray(arr3));
// Join
console.log(arr3.join(" and "));
//toString
console.log(arr3.toString());//separates by comma
//slice
let new_arr = arr3.slice(2,4);
console.log(new_arr);
//includes
console.log(arr3.includes("Berlin"));







