//array4.js

const  json = `
[{"id":1,"first_name":"Vita","email":"vkench0@google.com"},
{"id":2,"first_name":"Katuscha","email":"kantwis1@apache.org"},
{"id":3,"first_name":"Helaine","email":"hmoggach2@bloglovin.com"},
{"id":4,"first_name":"Tessa","email":"tkernaghan3@list-manage.com"}]`; ////json -> object로 변경  >  JSON.parse() 사용.

let members = JSON.parse(json);

//find
let result = members.find(function(item, idx, ary){   // 조건을 만족하는 첫번째 만 가지고 온다
    if(item.id>1){
        return true;
    }
    return false;
    //return item.id > 2
})
//console.log(result);

//filter
result= members.filter((item, idx)=>{  // 조건을 만족하는 모두를 가지고 온다
    return idx >= 1 && idx<3;
})
//console.log(result);


//reduce 활용
result = members.reduce((acc, item, idx)=>{
    if(idx >= 1 && idx<4){
        acc.push(item);
    }
    return acc;
},[])
//console.log(result);

let findName = members.find(el=>el.first_name=="Vita")
//console.log(findName);

//some 만족하는 값 하나라도 있으면 true 리턴, every  모두 만족해야 true 리턴
result = members.some((member)=>{
    console.log(member);
    return member.first_name.length > 5;
})
//console.log(result);

result = members.every((member)=>{
    console.log(member);
    return member.first_name.length > 5;
})
//console.log(result);

//map : A 데이터를 B데이터로 변환 같은 거 함
result = members.map(member => {
    let obj = {id: member.id, name: member.first_name, email:member.email, grade: 'c'}
    return obj;
})
console.log(result);
