//object.js

let obj1 = {
    name: 'Hong',
    age: 20
}

//주소 참조 
let obj2 = obj1;
console.log(obj1);
obj2.age = 22;
console.log(obj1);

//복사
let obj3 = {...obj1};
obj3.age = 24;
console.log(obj1);
console.log(obj3);

//클래스로 객체 생성
class Member {
    constructor(name,age,height){  //생성자
        this.name=name;
        this.age=age;
        this.height=height;
    }

    setWeight(weight){
        this.weight=weight;
    }
    getWeight(){
        return this.weight;
    }
    showInfo(){  //메소드
        return `이름은 ${this.name} 나이는 ${this.age}세 이고 키는 ${this.height}cm 입니다.`;

    }
     //학생의 정보 : 학생 번호 , 이름, 영어성적, 수학성적
     makeTr(student = {sno,sname,engScore,mathScore}){
        let tr = "";
        tr+='<tr>';
        tr+='<td>'+student.sno+'</td>'
        tr+='<td>'+student.sname+'</td>'
        tr+='<td>'+student.engScore+'</td>'
        tr+='<td>'+student.mathScore+'</td>'
        tr+= '<td><button id="delteBtn" onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
        tr+='</tr>';
        return tr;
     }

    //  makeHtml(studAry=[]){
    //     let table ='<table border="1"><tbody>';
    //     let obj = this;    //화살표 함수를 안쓰려면 이렇게
    //     table += studAry.reduce(function(acc,stud){
    //         return acc+obj.makeTr(stud);
    //     },'')
    //     table += '</tbody></table>';
    //     this.html = table;
    //  }

    makeHtml2(studAry=[]){
        let str = "";
        str +='<table border="1"><thead><tr><td> 번호 </td> <td> 이름 </td> <td> 영어성적 </td> <td> 수학이름 </td></tr></thead><tbody>';
        studAry.forEach((value)=>{
            str+= this.makeTr(value)
        })
        str+='</tbody></table>'
        this.html=str;
    }

     showPage(dom){
        dom.innerHTML = this.html;
     }
}

const mem1 = new Member('홍길동',20,156.7);
console.log(mem1.showInfo());
mem1.setWeight(60.5);
console.log(`홍길동의 몸무게 : `+ mem1.weight+`kg`);




