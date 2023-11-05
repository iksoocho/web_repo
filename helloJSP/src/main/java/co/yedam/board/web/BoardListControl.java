package co.yedam.board.web;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class BoardListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// 서블릿 : 데이터 처리   jsp : 보여주는 역할
		
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/json;charset=utf-8");
		
		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList();
		
		req.setAttribute("list", list);
		
		//페이지 요청(boardList.do 이 주소를 치면) -> 요청재요청(board/boardList.jsp 이걸 보여주라고 재요청)   
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/board/boardList.jsp");//.forward(req, resp);
		try {
			rd.forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		
		
	}

}
