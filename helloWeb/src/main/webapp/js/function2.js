//function2.js
console.log('function.js')
//Member member = new Member()
const member = {
    name: "홍길동",
    age: 18,
    height: 178.9,
    showInfo: function () {
        return (`이름은 ${this.name}이고 나이는 ${this.age}입니다.`)
    }
}

const member1 = {
    name: "이몽룡",
    age: 19,
    height: 173.9,
    showInfo: function () {
        return (`이름은 ${this.name}이고 나이는 ${this.age}입니다.`)
    }
}
const member2 = {
    name: "성춘향",
    age: 16,
    height: 163.9,
    showInfo: function () {
        return (`이름은 ${this.name}이고 나이는 ${this.age}입니다.`)
    }
}

const members = [member,member1,member2]
let str = "";
str +='<table border="1">';
str +='<thead>'
str +='<tr>';
str +='<td> 이름 </td> <td> 나이 </td> <td> 키 </td> <td> 비고 </td>'
str +='</tr>';
str +='</thead>'
str +='<tbody>';
members.forEach(function(value){
    str += makeTr(value);
})
str += '</tbody>';
str += '</table>';
    
show.innerHTML = str;  //table>tbody>(tr>td*4)*3



//DOM : Document Object Model
// let show = document.getElementById('show');
//table > thead,tbody>tr>td
// show.innerHTML = "<ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";

function makeTr(member = {name,age,height,showInfo}) {
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '<tr>';
    return html;
}

console.log(makeTr(member));