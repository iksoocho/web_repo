<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description" content="" />
<meta name="author" content="" />
<title>Simple Sidebar - Start Bootstrap Template</title>
<!-- Favicon-->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<!-- Core theme CSS (includes Bootstrap)-->
<link href="css/styles.css" rel="stylesheet" />
</head>
<body>
	<%
	String logId = (String) session.getAttribute("loginId");
	String respon = (String) session.getAttribute("responsibility");
	%>
	<div class="d-flex" id="wrapper">
		<!-- Sidebar-->
		<div class="border-end bg-white" id="sidebar-wrapper">
			<%
			if (logId == null) {
			%>
			<div class="sidebar-heading border-bottom bg-light">guest</div>
			<%
			} else {
			%>
			<div class="sidebar-heading border-bottom bg-light"><%=logId%>
				님 환영합니다
			</div>
			<%
			}
			%>

			<div class="list-group list-group-flush">



   				<a class="list-group-item list-group-item-action list-group-item-light p-3" href="boardList.do">게시물 보기</a>
				
				<% if (logId == null) { %>
				<a class="list-group-item list-group-item-action list-group-item-light p-3" href="loginForm.do">로그인 화면</a>
				<% } else { %>
				<a class="list-group-item list-group-item-action list-group-item-light p-3"href="logout.do">로그아웃</a>
				<% } %>
				
				<!-- 관리자 권한일 경우에만 -->
				<% if(respon == null){ %>
				<a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="#!">Events</a>
				 
				<%}else if(respon.equals("Admin")){ %>
				<a class="list-group-item list-group-item-action list-group-item-light p-3"
					href="memberList.do">회원관리</a>
				<%} %>
					<a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="#!">Events</a> <a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="#!">Profile</a> <a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="#!">Status</a>
			</div>
		</div>