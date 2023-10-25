//function4.js


//Member 생성자 함수
function Member(name, age, height){
    console.log(this);
    this.name=name;
    this.age=age;
    this.height=height;
    this.showInfo = function(){
        return `이름은 ${this.name}이고 나이는 ${this.age} 키는 ${this.height}입니다.`
    }
}
//makeTr함수
function makeTr(member = {name,age,height,showInfo}) {
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '<td><button id="delteBtn" onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
    html += '<tr>';
    return html;
}


document.getElementById('saveBtn').onclick = function(e){
    

        console.log(e.target);
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let height = document.getElementById('height').value;
    
    
    	if(!name || !age || !height){
			alert("값을 입력하세요");
			return;
		}
        const mem = new Member(name,age,height);
        let str = makeTr(mem);
        
        //힌트 function Member()~~,   makeTr(member), 
        
        let list = document.getElementById('list')
        list.innerHTML += str;
    
        document.getElementById('name').value="";
        document.getElementById('age').value="";
        document.getElementById('height').value="";
        document.getElementById('name').focus();
    

    
}


