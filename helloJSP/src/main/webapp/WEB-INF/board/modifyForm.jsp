<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>	

	
	<h3>게시글 수정화면</h3>
	<form action="modifyBoard.do" method="post">
		<input type="hidden" name="bno" value="${vo.boardNo }">
		<table class="table">
			<tr>
				<th>제목</th>
				<td><input type="text" name="title" value="${vo.title }"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input readonly type="text" name="writer"
					value="${vo.writer }"></td>
			</tr>
			<tr>

				<td colspan="2"><textarea class="form-control" name="content">${vo.content }</textarea></td>
			</tr>
			<tr>
				<th>파일명</th>
				<c:if test="${!empty vo.image }">
				<td colspan="3"><img style="align: cneter;" width="150px"
				src="images/${vo.image }"></td>
			</c:if>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="submit" class="btn btn-warning" value="수정">
					<input type="reset" class="btn btn-primary" value="초기화">
				</td>
			</tr>
		</table>
	</form>
<jsp:include page="../layout/footer.jsp"></jsp:include>