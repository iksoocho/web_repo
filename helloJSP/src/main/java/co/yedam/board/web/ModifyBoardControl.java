package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifyBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		String bno = req.getParameter("bno");
		String title = req.getParameter("title");
		String image=req.getParameter("image");
		String content = req.getParameter("content");
		
		BoardVO vo = new BoardVO();
		
		vo.setBoardNo(Integer.parseInt(bno));
		vo.setTitle(title);
		vo.setImage(image);
		vo.setContent(content);
		
		BoardService svc = new BoardServiceImpl();
		if (svc.editBoard(vo)) {
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("modifyForm.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
				
		
		
		
		
		
		
	}//end execute

}
