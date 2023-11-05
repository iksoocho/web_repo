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

public class FrontController extends HttpServlet {   //??.do 로 끝나면 항상 FrontController가 실행되는데 어떤 .do 냐 따라서 다른 매소드들을 실행해주기 위해 나눠놈

	Map<String, Command> map = new HashMap<>();

	@Override
	public void init() throws ServletException {
		//목록 화면
		map.put("/boardList.do", new BoardListControl());
		//특정 게시물 불러오기
		map.put("/getBoard.do", new GetBoardControl());
		//등록화면
		map.put("/boardForm.do", new BoardFormControl());
		//등록처리
		map.put("/addBoard.do", new AddBoardControl());
		

	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("FrontController");
		String uri = req.getRequestURI(); // http://localhost:8080/helloJSP/??.do 에서 helloJSP/??.do가 uri    >>어떤 url이 들어오냐에 따라 다른 매소드들을 적용하기위해
		String context = req.getServletContext().getContextPath(); // =helloJSP
		String page = uri.substring(context.length());
		System.out.println(page);

		Command controller = map.get(page);
		controller.execute(req, resp);

	}

}
