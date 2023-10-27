//array2.js : MOCK_DATA.JSON 파일 활용

const  json = `
[{"id":1,"first_name":"Vita","email":"vkench0@google.com"},
{"id":2,"first_name":"Katuscha","email":"kantwis1@apache.org"},
{"id":3,"first_name":"Helaine","email":"hmoggach2@bloglovin.com"},
{"id":4,"first_name":"Tessa","email":"tkernaghan3@list-manage.com"},
{"id":5,"first_name":"Brina","email":"boutibridge4@bbc.co.uk"},
{"id":6,"first_name":"Fernando","email":"fcomizzoli5@e-recht24.de"},
{"id":7,"first_name":"Heda","email":"hoffner6@sakura.ne.jp"},
{"id":8,"first_name":"Terrye","email":"tide7@nifty.com"},
{"id":9,"first_name":"Lucius","email":"lglyssanne8@answers.com"},
{"id":10,"first_name":"May","email":"mbreukelman9@printfriendly.com"}]`;    //json -> object로 변경  >  JSON.parse() 사용.

let members = JSON.parse(json);
console.log(members);

let delMember = "Tessa";
let yourInfo = {name:"hong",email:"hong@gmail.com"}
for(let i=0;i<members.length;i++){
    if(members[i].first_name==delMember){
        members.splice(i,1, {id: members[i].id ,first_name: yourInfo.name, email: yourInfo.email });
    }
}
//foEach 활용
// members.forEach((member,idx) => {
//     if(member.first_name == delMember){
//         members.splice(idx,1);
//     }
// });
// console.log(members)

// let inpVal = prompt("이름과 이메일을 입력하세요 예) 홍길동 , hong@email.com")
// // console.log(inpVal)  //입력 값이 문자열로 들어와있음
// // members.splice(members.length,0,{id: (members.length+1), first_name: inpVal.replace(' ','').split(',')[0], email: inpVal.replace(' ','').split(',')[1]})
// // console.log(members)

// //교수님 버전
// const infoAry = inpVal.replace(' ','').split(',');
// let nid = members[members.length - 1].id+1;
// let newMember = {id: nid, first_name: infoAry[0], email: infoAry[1]}
// members.push(newMember);
// console.log(members)


const dupAry = [["라이언",5],["어피치", 3],["무지", 4]];
console.log(dupAry);
console.table(dupAry);