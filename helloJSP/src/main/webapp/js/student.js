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

//수정 버튼 이벤트
document.querySelector('#modBtn').addEventListener('click',modCallback)




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
				'Content-Type': 'application/x-www-form-urlencoded'
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
}//end addCallback


function modCallback(e){
	let id = document.querySelector('.modal-body input[name=sid]').value;
	let dept = document.querySelector('.modal-body input[name=dept]').value;
	let name = document.querySelector('.modal-body input[name=name]').value;
	let pwd = document.querySelector('.modal-body input[name=pass]').value;
	let birth = document.querySelector('.modal-body input[name=birth]').value;
	
	let param = `id=${id}&name=${name}&pwd=${pwd}&dept=${dept}&birth=${birth}`;

	fetch('../editStudent.do', {
		method: 'post',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: param
	})
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result)
		if (result.retCode == 'OK') {
			alert('성공')
			result.vo.studentId;
			let targetTr = document.querySelector('tr[data-sid='+result.vo.studentId+']')
			let newTr = makeTr(result.vo);
			let parentElem = document.querySelector('#list');
			parentElem.replaceChild(newTr, targetTr)
			document.getElementById("myModal").style.display = "none";
		} else {
			alert('실패')
		}
	})
	.catch(err => console.log('error : ', err))
}//end modCallback





function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid', obj.studentId)
	tr.addEventListener('dblclick', showModal)


	for (let prop of showFields) {
		let td = document.createElement('td')
		td.innerHTML = obj[prop];
		tr.append(td);
	}

	//삭제 버튼
	let td = document.createElement('td');
	let btn = document.createElement('button')
	btn.setAttribute('data-sid', obj.studentId);
	btn.addEventListener('click', function (e) {
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
	console.log(this)
	id = this.dataset.sid; //data-sid : sid
	console.log(id)
	// Get the modal
	var modal = document.getElementById("myModal");


	fetch("../getStudent.do?id=" + id)
		.then(resolve => resolve.json())
		.then(result => {
			modal.style.display = "block";

			modal.querySelector('h2').innerHTML = result.studentName;
			modal.querySelector('input[name=pass]').value = result.studentPwd
			modal.querySelector('input[name=name]').value = result.studentName
			modal.querySelector('input[name=birth]').value = result.studentBirthday
			modal.querySelector('input[name=sid]').value = result.studentId

		})
		.catch(err => console.log('error : ', err))


	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}