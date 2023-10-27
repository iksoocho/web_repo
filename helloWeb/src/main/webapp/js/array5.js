//array5.js

const arr1 = ['펭수', '라이언', '어피치','콘','무지']
arr1.sort();
console.log(arr1);  //배열 자체를 변경

const arr2 = [4,8,1,12,23,9];
arr2.sort(function(a,b){   //오름 차순 조건(암기)    -1,1 자리 바꾸면 내림 차순
    if(a<b){
        return -1;
    }else{
        return 1;
    }
});
console.log(arr2);



const  json = `
[{"id":1,"first_name":"Vita","email":"vkench0@google.com"},
{"id":2,"first_name":"Katuscha","email":"kantwis1@apache.org"},
{"id":3,"first_name":"Helaine","email":"hmoggach2@bloglovin.com"},
{"id":4,"first_name":"Tessa","email":"tkernaghan3@list-manage.com"}]`; ////json -> object로 변경  >  JSON.parse() 사용.

let members = JSON.parse(json);

members.sort(function(a,b){
    if(a.first_name<b.first_name){
        return -1;
    }else{
        return 1;
    }
})
members.reverse();
console.log(members);