//function3.js

function Member(name, age, height){
    console.log(this);
    this.name=name;
    this.age=age;
    this.height=height;
    this.showInfo = function(){
        return `이름은 ${this.name}이고 나이는 ${this.age} 키는 ${this.height}입니다.`
    }
}

const member4 = new Member('홍길동', 20, 123.4);
console.log(member4.showInfo());

const members1 = [
    new Member('홍길동', 19, 123.4),
    new Member('조익수', 20, 153.4),
    new Member('박규현', 21, 173.4)
]

//함수 table생성
function makeTable(mamberAry=[]){
    str+='<table border="1"><thead><tr><td> 이름 </td> <td> 나이 </td> <td> 키 </td> <td> 비고 </td></tr></thead><tbody>';
    members1.forEach(function(value){
        str += `<tr><td>${value.name}</td><td>${value.age}</td><td>${value.height}</td><td>${value.showInfo()}</td></tr>`;
    })
    str+='</tbody></table>'
    return show.innerHTML = str;
}
makeTable(members1);
