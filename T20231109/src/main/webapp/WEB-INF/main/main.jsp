<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></head>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.css" />
<title>독서실예약</title>
<style>
	#calendar {
		
	}
	.seatDiv{
		cursor : pointer;
		width : 90px;
		aspect-ratio : 1/1 auto;
		margin : 10px;
	}
	#allTimeList td{
		cursor : pointer;
	}
	.disabledDiv{
		background-color : #A4A4A4;
		margin : 10px;
		padding : 5px;
	}
	.pickDiv{
		background-color : #E3F6CE;
	}
	.choiceday{
		background-color : #fcf8e3;
	}
	.addLine{
		text-decoration : line-through;
		background-color  :#F2F2F2; 
		color : #BDBDBD;
	}
	#calendarDiv{
		width: 80%;
		margin : 40px auto;
	}
	#topdiv {
		width : 1000px;
		margin : 20px auto;
	}
	#btndiv{
		width: 90%;
		text-align : right;
	}
	#timeTable{
		width : 1000px;
		margin : 20px auto;
		padding : 10px;
	}
	.ableDiv{
		margin : 10px;
		padding : 5px;
		
	}
	#reserveDiv{
		width : 1000px;
		margin : 20px auto;
		padding : 10px;
	}
</style>
</head>
<body>
	<!--  -->
	<div  id="calendarDiv">
		<div id="calendar" ></div>
	</div>
	
	<!-- 게시글 목록 -->
	<div id="boardList">
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/locale/ko.js"></script>
<script>
	var lastCkVal = "true";
	var lastOverlapCK = "true";
	var lastOverlapCKtime = "true";
	
	//올해 끝 날짜
	var today = new Date();
	var endOfYear = new Date(today.getFullYear(), 11, 31);

	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			defaultView: 'month',
			defaultDate: moment().format("YYYY-MM-DD"),
			locale: 'ko',
		    validRange: function(nowDate) {
		        return {
		        	start: moment().startOf('day')/* ,
		        	end : endOfYear */
		        };
		      },
			dayClick: function(date, jsEvent, view) {
				let data = date.format();
				//$(this).addClass('choiceDate');
				/* location.href="/study/studyRoom.do?use_start="+data; */
				//location.href="productList.do";
				getBoardData(data);
			},
		});
	})
	
	function getBoardData(val){
		console.log(val);
	    var encodedVal = encodeURIComponent(val);

	    
	    fetch('productList.do',{
	    	method: 'post',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: 'brdDate='+encodedVal
	    })
	    .then(resolve=>resolve.text())
	    .then(result=>{
	    	console.log(result)
	    	var brdDiv = document.getElementById("boardList");
	    	brdDiv.innerHTML=result;
	    })
	    .catch(err=>console.log(err))
	    
		//$.ajax({
		//	url :"boardList.do?brdDate="+encodedVal,
		//	dataType: "html",
		//	success : function(data){
		//		$('#boardList').html(data);
		//	}
		//})
	}
	</script>
</body>
</html>