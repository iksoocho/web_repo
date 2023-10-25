//objecr3.js

const member = {
    name: "홍길동",
    age: 20,
    height: 180.6,
    showInfo: function(){
        return `이름은 ${this.name} 나이는 ${this.age}세 이고 키는 ${this.height}cm 입니다.`;
    },
    html: '',
    makeTr(student = {sno,sname,engScore,mathScore}){
        let tr = "";
        tr+='<tr>';
        //for in 활용
        for(let prop in student){
            tr+='<td>'+student[prop]+'</td>'
        }
        // tr+='<td>'+student.sname+'</td>'
        // tr+='<td>'+student.engScore+'</td>'
        // tr+='<td>'+student.mathScore+'</td>'
        tr+= '<td><button id="delteBtn" onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
        tr+='</tr>';
        return tr;
     
    },
    makeHtml(studAry){
        let str = "";
        str +='<table border="1"><thead><tr><td> 번호 </td> <td> 이름 </td> <td> 영어성적 </td> <td> 수학이름 </td><td> 삭제 </td></tr></thead><tbody>';
        studAry.forEach((value)=>{
            str+= this.makeTr(value)
        })
        str+='</tbody></table>'
        this.html=str;
    },
    showPage(dom){
        dom.innerHTML = this.html;
    }
}

//객체의 속성 for..in
for(let prop in member){
    //member.name    member['age']   표현식 2개
    //console.log(typeof member[prop])
    if((typeof member[prop])!='function'){
        console.log(member[prop])
    }
}





const students = [
    {sno:'001', sname:"최해주", engScore:80, mathScore:85},
    {sno:'002', sname:"김채빈", engScore:60, mathScore:65},
    {sno:'003', sname:"최다예", engScore:70, mathScore:75},
    {sno:'004', sname:"조익수2", engScore:100, mathScore:95}
]


member.makeHtml(students);
member.showPage(document.getElementById('show'))

