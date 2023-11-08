package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;
import co.yedam.reply.web.AddReplyControl;
import co.yedam.reply.web.RemoveReplyCintrol;
import co.yedam.reply.web.ReplyListControl;

public class FrontController extends HttpServlet {   //??.do 로 끝나면 항상 FrontController가 실행되는데 어떤 .do 냐 따라서 다른 매소드들을 실행해주기 위해 나눠놈

	Map<String, Command> map = new HashMap<>();

	@Override
	public void init() throws ServletException {
		//메인페이지
		map.put("/main.do", new MainControl());
		//로그인
		map.put("/loginForm.do", new LoginFormControl());
		map.put("/login.do", new LoginControl());
		map.put("/logout.do", new LogoutControl());
		
		//관리자계정
		map.put("/memberList.do", new MemberListControl());
		
		//목록 화면
		map.put("/boardList.do", new BoardListControl());
		//특정 게시물 불러오기
		map.put("/getBoard.do", new GetBoardControl());
		//등록화면 , 등록처리
		map.put("/boardForm.do", new BoardFormControl());
		map.put("/addBoard.do", new AddBoardControl());
		//수정화면 , 수정처리
		map.put("/modifyForm.do", new ModifyFormControl());
		map.put("/modifyBoard.do", new ModifyBoardControl());
		//삭제화면, 삭제처리
		map.put("/removeForm.do", new RemoveFormControl());
		map.put("/removeBoard.do", new RemoveBoardControl());
		
		//댓글 목록
		map.put("/replyList.do", new ReplyListControl());
		map.put("/addReply.do", new AddReplyControl());
		map.put("/removeReply.do", new RemoveReplyCintrol());
		
		//차트
		map.put("/chartForm.do", new ChartFormControl());
		map.put("/drawChart.do", new DrawChartControl());

	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//요청정보의 한글 인코딩 방식
		req.setCharacterEncoding("UTF-8");
		
		System.out.println("FrontController");
		String uri = req.getRequestURI(); // http://localhost:8080/helloJSP/??.do 에서 helloJSP/??.do가 uri    >>어떤 url이 들어오냐에 따라 다른 매소드들을 적용하기위해
		String context = req.getServletContext().getContextPath(); // =helloJSP
		String page = uri.substring(context.length());
		System.out.println(page);

		Command controller = map.get(page);
		controller.execute(req, resp);

	}

}
