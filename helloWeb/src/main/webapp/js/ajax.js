//ajax.js
//Asynchronous Javascript And XML > ajax

//비동기(작업이 먼저 끝나는 순서대로,시간단축을 위해 병렬식)vs동기(위에서 부터 순차적으로)
//비동기   setTimeout,XMLHttpRequest 등등

import {
    table
} from './ajaxModule.js';
let friends = [];
setTimeout(function () {
    friends.push('홍길동');
}, 1000)
setTimeout(function () {
    friends.push('김길동');
}, 500)
setTimeout(function () {
    friends.push('최길동');
}, 2000)
//console.log(friends);

//동기
friends = [];
friends.push('홍길동');
friends.push('김길동');
friends.push('최길동');





//ajax 실행
let xhtp = new XMLHttpRequest();
xhtp.open('get', '../MemberListServ2');
xhtp.send();
xhtp.onload = loadJson;


function loadJson(){
    console.log(xhtp.responseText)
    let result = JSON.parse(xhtp.responseText);
    console.log(result)


    let titles = ['회원번호', '비밀번호', '이름', '연락처'];
    let tt = table.makeTable(titles, result);
    document.getElementById('show').innerHTML = tt;
    
}


function loadXML() {
    console.log(xhtp.responseXML);
    let doc = xhtp.responseXML;
    let records = doc.getElementsByTagName('record')
    console.log(records);

    let titles = ['회원번호', '비밀번호', '이름', '연락처'];
    let dataAry = [];
    for (let record of records) {
        let obj = {
            mid: record.children[0].textContent,
            pass: record.children[1].textContent,
            name: record.children[2].textContent,
            phone: record.children[3].textContent
        }
        dataAry.push(obj);
    }
    let result = table.makeTable(titles, dataAry);
    document.getElementById('show').innerHTML = result;

    let newMember = {
        mid: "M009",
        pass: "9999",
        name: "민시기",
        phone: "010-9999-9999"
    }

    let tr = `<tr><td>${newMember.mid}</td><td>${newMember.pass}</td><td>${newMember.name}</td><td>${newMember.phone}</td></tr>`
    document.getElementById('list').innerHTML += tr;
}