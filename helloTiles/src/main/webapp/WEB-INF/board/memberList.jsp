

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>	





<h3>회원 목록</h3>

<table class="table">
	<thead>
		<tr>
			<th>아이디</th>
			<th>비밀번호</th>
			<th>이름</th>
			<th>연락처</th>
			<th>등급</th>
		</tr>
	</thead>
	<tbody>
	<c:forEach items="${list }" var="member">
	<tr>
		<td>${member.mid }</td>
		<td>${member.pass }</td>
		<td>${member.name }</td>
		<td>${member.phone }</td>
		<td>${member.responsibility }</td>
	</tr>
	</c:forEach>
	
	
	</tbody>
	</table>

