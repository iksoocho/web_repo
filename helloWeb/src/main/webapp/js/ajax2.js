//ajax2.js
import {
    table
} from './ajaxModule.js';

//onclick 등록 ajax.html 에서 <button onclick="addMember()"> 해도 됨
document.getElementById('addBtn').onclick = addMember;
document.getElementById('modBtn').onclick = modMember;

function addMember(e) {
    let mid = document.getElementById('mid').value;
    let pass = document.getElementById('pass').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    const xhtp = new XMLHttpRequest();
    xhtp.open('get', '../AddMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
    xhtp.send();
    xhtp.onload = function () {
        console.log(xhtp.responseText);
        //사용자 입력값 : retCode=OK => {vo:mid,pass,name,phone}
        //tr 생성해서 td생성, 화면출력 id = "list"의 innerHTML
        //retCode=NG => alert 경고창
        let result = JSON.parse(xhtp.responseText);
        
        if (result.retCode == "OK") {
            document.getElementById('list').innerHTML += table.makeTr(result.vo)
           
        }else{
            alert('처리중 에러(회원 아이디: '+result.vo+')');
        }
    }
}

function modMember(e) {
    let mid = document.getElementById('mid').value;
    let pass = document.getElementById('pass').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    const xhtp = new XMLHttpRequest();
    xhtp.open('get', '../ModMemberServ.do?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
    xhtp.send();
    xhtp.onload = function () {
        console.log(xhtp.responseText);
        
        //사용자 입력값 : retCode=OK => {vo:mid,pass,name,phone}
        //tr 생성해서 td생성, 화면출력 id = "list"의 innerHTML
        //retCode=NG => alert 경고창
        let result = JSON.parse(xhtp.responseText);
        console.log(result)
        //vo: mid,pass,name,phone   ,  retCode OK/NG
        document.querySelectorAll('#list tr').forEach(tr=>{
            console.log(tr.children)
            if(tr.children[0].innerHTML==result.vo.mid){
                tr.children[1].innerHTML = result.vo.pass;
                tr.children[2].innerHTML = result.vo.name;
                tr.children[3].innerHTML = result.vo.phone;
            }
        })
        
    }
}


// const xhtp = new XMLHttpRequest();
// xhtp.open('get', '../AddMemberServ.html?mid=M007&pass=9999&name=Kim&phone=010-7777-9999');
// xhtp.send();
// xhtp.onload = function () {
//     console.log(xhtp.responseText);
// }