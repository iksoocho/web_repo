//fetch.js
import {
    table
} from './ajaxModule.js';


fetch('../MemberListServ2')
.then((resolve)=>{
    console.log(resolve);
    return resolve.json();  //json 문자열을 자바스크립트의 객체(object)타입으로 변환시켜 주는 함수
})
.then((result)=>{
    console.log(result);
    let titles = ['회원번호', '비밀번호', '이름', '연락처'];
    let dataAry=result;
    result = table.makeTable(titles, dataAry);
    document.getElementById('show').innerHTML = result;
})
.catch((err)=>{
    console.log('error=> ',err);
})

