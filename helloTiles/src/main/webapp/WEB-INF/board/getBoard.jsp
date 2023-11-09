<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
#list span {
	margin: 4px
}

.pagination {
	display: inline-block;
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
}

.pagination a.active {
	background-color: #4CAF50;
	color: white;
}

.pagination a:hover:not(.active) {
	background-color: #ddd;
}
</style>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>





<form action="modifyForm.do" name="myForm">
	<input type="hidden" name="bno" value="${bno.boardNo }">
	<h3>조회 화면</h3>
	
	<table class="table">
		<tr>
			<th>글번호</th>
			<td class="boardNo">${bno.boardNo }</td>
			<th>등록일자</th>
			<td><fmt:formatDate value="${bno.writeDate }" pattern="yyyy-MM-dd HH:mm:ss"></fmt:formatDate></td>
		</tr>
		<tr>
			<th>글제목</th>
			<td colspan="3">${bno.title }</td>
		</tr>
		<tr>
			<td colspan="4"><textarea class="form-control">${bno.content }</textarea></td>
		</tr>
		<tr>
			<th>이미지</th>
			<c:if test="${!empty bno.image }">
				<td colspan="3"><img style="align: cneter;" width="150px"
				src="images/${bno.image }"></td>
			</c:if>
		</tr>
		<tr>
			<th>작성자</th>
			<td>${bno.writer }</td>
			<th>조회수</th>
			<td>${bno.viewCnt }</td>
		</tr>
		<tr>
			<td colspan="4" align="center">
			
			<c:choose>
				<c:when test="${!empty loginId && loginId == bno.writer }">
					<input type="submit" class="btn btn-primary" value="수정">
					<input type="button" class="btn btn-warning" value="삭제">
				</c:when>
				<c:otherwise>
					<input disabled type="submit" class="btn btn-primary" value="수정">
					<input disabled type="button" class="btn btn-warning" value="삭제">
				</c:otherwise>
			</c:choose>
				
			</td>
		</tr>
	</table>
</form>
<h3>댓글등록</h3>
<table class="table">
	<tr>
		<th>댓글내용</th>
		<td><input type="text" id="content"  placeholder="값을 입력하세요"></td>
		<td><button id="addReply">댓글등록</button></td>
	</tr>

</table>

<h3>댓글목록</h3>
<ul id="list">
	<li style="display: none" id="template"><span>00</span><b>첫번째
			댓글입니다.</b><span>user01</span><span>2023-11-7</span>
		<button>삭제</button></li>
</ul>

<div class="pagination"></div>




<script>
			document.querySelector('input[type=button]').addEventListener('click', function(e){
				document.forms.myForm.action='removeForm.do';
				document.forms.myForm.submit();
			});
			
			let bno = "${bno.boardNo }"; 
			let writer = "${loginId }";
			bno = document.querySelector('.boardNo').innerHTML;
			let page = 1;
			

			function showList(pg=1){
				document.querySelectorAll('#list li:not(:nth-of-type(1))').forEach(li=>li.remove()); //링크 누르면 전에 보여지던 페이지 삭제하고 다음 페이지 보여줄수 있게

				fetch('replyList.do?bno='+ bno + '&page='+pg)
				.then(resolve=>resolve.json())
				.then(result=>{
					console.log(result);
					if(pg<0){
						page = Math.ceil(result.dto.total/5);
						showList(page)
						return;
					}else if (pg == 0) {
						document.querySelector('.pagination').innerHTML = '';
						return;
					}
					result.list.forEach(reply=>{
						let li  = makeRow(reply)
						//
						document.querySelector('#list').append(li)
						
					})
					console.log(result.dto)
					makePaging(result.dto)
				})
				.catch(err=>console.log(err))
			}
			showList();
			


			//페이지 생성
			function makePaging(dto={}){
				document.querySelector('.pagination').innerHTML='';

				if(dto.prev){
					let aTag = document.createElement('a');
					aTag.setAttribute('href',dto.endPage-1);
					aTag.innerHTML = "&laquo;";
					document.querySelector('.pagination').append(aTag);
				}
				for(let i = dto.startPage; i <= dto.endPage; i++){
					let aTag = document.createElement('a');
					aTag.setAttribute('href',i);
					aTag.innerHTML = i;
					if(i==page){
						aTag.className='active'; //class속성을 지정할떄 ...className
					}
					document.querySelector('.pagination').append(aTag);
				}
				if(dto.next){
					let aTag = document.createElement('a');
					aTag.setAttribute('href',dto.endPage+1);
					aTag.innerHTML = "&raquo;";
					document.querySelector('.pagination').append(aTag);
				}
				
				//a태그에 클릭 이벤트 등록
				document.querySelectorAll('.pagination a').forEach(elem =>{
					elem.addEventListener('click',function(e){
						e.preventDefault(); //a태그의 기본기능인 링크 기능 차단
						page = elem.getAttribute('href')
						showList(page);
					})
				})
			}
			


			function makeRow(reply){
				let temp = document.querySelector('#template').cloneNode(true);
					temp.style.display='block'
					temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
					temp.querySelector('b').innerHTML = reply.reply;
					temp.querySelector('span:nth-of-type(2)').innerHTML = reply.replyer;
					temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyDate;
					
					temp.querySelector('#template> button').addEventListener('click', function(e) {
						if(writer != reply.replyer){
							alert('삭제 권한이 없습니다.')
							return;
						}
						fetch('removeReply.do', {
							method: 'post',
							headers: {'Content-Type': 'application/x-www-form-urlencoded'},
							body: 'rno=' + reply.replyNo
						})
						.then(resolve => resolve.json())
						.then(result => {
							if (result.retCode == 'OK') {
								alert('삭제 성공!')
								e.target.parentElement.remove();
								if(document.querySelectorAll('#list > li').length == 1) {
									showList(-1);	
								}
								else {
									showList(page);
								}
								
						} else {
								alert('삭제 실패');
							}
						})
					})

					
					return temp;
			}
			
			//등록처리
			document.querySelector('#addReply').addEventListener('click', function(e){
				let reply = document.querySelector('#content').value;
				if(!bno || !writer || !reply){
					alert("값을 확인하세요")
					return;
				}
				fetch('addReply.do',{
					method: 'post',
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					body: 'bno='+bno+'&reply='+reply+'&replyer='+writer
				})
				.then(resolve =>resolve.json())
				.then(result =>{
					if(result.retCode=='OK'){
						//document.querySelector('#list').append(makeRow(result.vo))
						showList(-1);
					}else{
						alert('error')
					}
				})
			})
		</script>


<p>
	<a href="boardList.do">목록으로</a>
</p>
