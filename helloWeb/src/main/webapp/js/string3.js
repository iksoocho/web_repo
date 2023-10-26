//string3.js

let today =  new Date();   //  Date > 내장객체
today.getFullYear();  //2023
today.getMonth();   //9
today.getDate();  //26

//날짜 변경
today.setFullYear(2022);
today.setMonth(9); //1월
today.setDate(1);
today.setHours(10);

console.log(today.toString());  


function dateFormat(today){
    //yyyy-MM-dd hh24:mm:ss로 출력되도록
    return today.getFullYear()+'-'+('0'+(today.getMonth()+1)).slice(-2)
    +'-'+'0'+today.getDate()+' '+today.getHours()+':'
    +today.getMinutes()+':'+today.getSeconds();


}
console.log(dateFormat(today));