package co.yedam.common;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class MemberListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		BoardService svc = new BoardServiceImpl();
		List<MemberVO> list = svc.memberList();
		
		req.setAttribute("list", list);
		
		//페이지 요청(boardList.do 이 주소를 치면) -> 요청재요청(board/boardList.jsp 이걸 보여주라고 재요청)   
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/board/memberList.jsp");//.forward(req, resp);
		try {
			rd.forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
	}
	}
}
