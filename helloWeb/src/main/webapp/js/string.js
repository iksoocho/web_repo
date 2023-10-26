//string.js

let str1 = "Hellow";
let str2 = new String("Hellow");
console.log(typeof str1);
console.log(typeof str2);
console.log(str1 == str2); // 값만 비교
console.log(str1 === str2); // 값과 타입까지 비교

console.log(str1.toUpperCase());

let result = "   공백  제거  합니다    ".trim();
console.log(result,'    문자 개수 : ',result.length);



//trim(),trimStart(),trimEnd(),replace(), split(),slice(),substring(),substr()
//toString(), indexOf(), lastIndexOf(), charAt(), includes(), concat()

result = "Hello, World, Nice, World".replace(',' , '.');
console.log(result);

result = "Hello, World, Nice, World".replace(/,/g , '.');  //  /값/ -> 정규표현식 객체
console.log(result);

result = "Hel  lo, Wo  rld,   Nic  e,    World".replace(/\s/g , ''); 
console.log(result);