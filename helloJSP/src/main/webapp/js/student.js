/**
 *  js/student.js
 */

//페이지가 로딩 되면서 바로 실행
fetch('../studentList.do')
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result);
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		});
	})
	.catch(err => console.log('error : ', err));


//등록버튼 이벤트
document.querySelector('#addBtn').addEventListener('click', addCallback)
//addCallback
function addCallback(e) {
	//입력값 찾기
	let sid = document.querySelector('input[name=id]').value;
	let name = document.querySelector('#name').value;
	let pwd = document.querySelector('input[name=pwd]').value;
	let dept = document.querySelector('#dept').value;
	let birth = document.querySelector('#birth').value;

	let param = `id=${sid}&name=${name}&pwd=${pwd}&dept=${dept}&birth=${birth}`;
	console.log(param)



	//ajax 호출
	//fetch('../addStudent.do?'+ param)  //> get방식 요청
	//get : 주소줄에서 url에 ?뒤에 값 넘김, 값에 제한이 있음
	//post: 파라미터의 표현이X , 값의 제한도 X, content-type 을 지정해 줘야됨
	fetch('../addStudent.do', {
		method: 'post',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		body: param
	})
		.then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {
				alert('성공')
				let tr = makeTr({
					studentId: sid,
					studentName: name,
					studentBirthday: birth
				})
				document.querySelector('#list').append(tr)
			} else {
				alert('실패')
			}
		})
		.catch(err => console.log('error : ', err))
}

function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday'];
	let tr = document.createElement('tr');
	tr.addEventListener('dblclick',showModal)


	for (let prop of showFields) {
		let td = document.createElement('td')
		td.innerHTML = obj[prop];
		tr.append(td);
	}

	//삭제 버튼
	let td = document.createElement('td');
	let btn = document.createElement('button')
	btn.setAttribute('data-sid', obj.studentId);
	btn.addEventListener('click', function(e) {
		//ajax 호출 -> 삭제 servlet 호출(db)과 화면 출력을 동시에 처리 
		fetch('../delStudent.do?sid=' + obj.studentId)
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == 'OK') {
					alert('삭제 성공');
					tr.remove();
				} else {
					alert('삭제 실패');
				}
			})
			.catch(err => console.log('error : ', err))
	});
	btn.innerHTML = "삭제"
	td.append(btn)
	tr.append(td);
	return tr;
}

function showModal(e) {
	let id = this.children[0].innerHTML;
	


	// Get the modal
	var modal = document.getElementById("myModal");

	

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];


	modal.style.display = "block";
	let data = {id:"std1",name:"홍길동",pass:"1234",birth:"2000-01-01"}
	modal.querySelector('h2').innerHTML= data.name;
	modal.querySelector('input[name=pass]').value=data.pass
	modal.querySelector('input[name=name]').value=data.name

	modal.querySelector('input[name=birth]').value=data.birth
	

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}