<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

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
	
	
	<div class="d-flex" id="wrapper">
		<!-- Sidebar-->
		<div class="border-end bg-white" id="sidebar-wrapper">
			<c:choose>
				<c:when test="S{empty loginId }">
					<div class="sidebar-heading border-bottom bg-light">guest</div>
				</c:when>
				
				<c:otherwise>
					<div class="sidebar-heading border-bottom bg-light">(${name })님 환영합니다 ${responsibility }</div>
				</c:otherwise>
			</c:choose>
			

		<div class="list-group list-group-flush">


   			<a class="list-group-item list-group-item-action list-group-item-light p-3" href="boardList.do">게시물 보기</a>
				
			<c:choose>
				<c:when test="${empty loginId }">
					<a class="list-group-item list-group-item-action list-group-item-light p-3" href="loginForm.do">로그인 화면</a>
				</c:when>					
				<c:otherwise>
					<a class="list-group-item list-group-item-action list-group-item-light p-3"href="logout.do">로그아웃</a>
				</c:otherwise>
			</c:choose>
				
				
				<!-- 관리자 권한일 경우에만 -->
				<c:if test="${!empty responsibility && responsibility == 'Admin' }">
					<a class="list-group-item list-group-item-action list-group-item-light p-3"
					href="memberList.do">회원관리</a>
				</c:if>
			
					<a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="chartForm.do">차트</a> <a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="#!">Profile</a> <a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="#!">Status</a>
			</div>
		</div>