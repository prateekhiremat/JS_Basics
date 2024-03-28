let str = '      aabcddef  ';
str=str.toUpperCase();
console.log(str);
str=str.toLowerCase();
console.log(str);
console.log(str.trim());

let str2 = 'ghijk';
let temp = str.concat(str2);
console.log(temp);

str = str.replace('d','z');
console.log(str);
str = str.replaceAll('a','x');
console.log(str);
console.log(str2.charAt());
console.log(str2.slice(2, 5));
console.log(str2.endsWith('k'));
console.log(str2.includes('a'));
console.log(str2.indexOf('l'));
console.log(str2.lastIndexOf('k'));