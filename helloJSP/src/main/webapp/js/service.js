/**
 *  service.js
 */


// async function studentList() {
// 	let req = await fetch('../studentList.do');   //resolve와 같음
// 	let json = await req.json();                  //result 와 같음  // json형태 {"retCode":"OK"} -> {retCode:"OK"}
// 	let tbody = document.querySelector('#list');
// 	try {
// 		json.forEach(student => {
// 			tbody.append(makeTr(student));
// 		});
// 	} catch (err) {
// 		console.log('error : ', err)
// 	}
// }

export default {
	//목록 처리
	async studentList(successCallback, errorCallback) {
		let req = await fetch('../studentList.do');   //resolve와 같음
		let json = await req.json();                  //result 와 같음  // json형태 {"retCode":"OK"} -> {retCode:"OK"}
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},


	//단건 조회
	async getStudent(id,successCallback, errorCallback) {
		let req = await fetch('../getStudent.do?id='+ id);   //resolve와 같음
		let json = await req.json();                  //result 와 같음  // json형태 {"retCode":"OK"} -> {retCode:"OK"}
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},
	



	//등록
	async addStudent(optObj,successCallback, errorCallback) {
		let req = await fetch('../addStudent.do', optObj);   //resolve와 같음
		let json = await req.json();                  //result 와 같음  // json형태 {"retCode":"OK"} -> {retCode:"OK"}
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},



	//수정
	async editStudent(optObj,successCallback, errorCallback) {
		let req = await fetch('../editStudent.do', optObj);   //resolve와 같음
		let json = await req.json();                  //result 와 같음  // json형태 {"retCode":"OK"} -> {retCode:"OK"}
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},


	//삭제
	async removeStudent(id,successCallback, errorCallback) {
		let req = await fetch('../delStudent.do?sid='+ id);   //resolve와 같음
		let json = await req.json();                  //result 와 같음  // json형태 {"retCode":"OK"} -> {retCode:"OK"}
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	}

}