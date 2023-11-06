package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class AddBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// 제목, 내용, 작성자

		BoardVO vo = new BoardVO();
		
		if (req.getMethod().equals("GET")) {

			String title = req.getParameter("title");
			String writer = req.getParameter("writer");
			String content = req.getParameter("content");

			
			vo.setTitle(title);
			vo.setWriter(writer);
			vo.setContent(content);

			
			
			
		}else if(req.getMethod().equals("POST")) {
			String saveDir = req.getServletContext().getRealPath("images");
			int size = 5*1024*1024;
			//MultipartRequest mr; 파일 저장을 위해서
			try {
				MultipartRequest mr = new MultipartRequest(req, //요청 정보
															saveDir, //저장경로
															size, //최대 업로드 사이즈
															"UTF-8", //encoding
															new DefaultFileRenamePolicy() //리네임정책 ex) son.jpg,son1.jpg,son2.jpg ...
															);
				String title = mr.getParameter("title");
				String writer = mr.getParameter("writer");
				String content = mr.getParameter("content");
				String img = mr.getFilesystemName("img");
				
				
				vo.setTitle(title);
				vo.setWriter(writer);
				vo.setContent(content);
				vo.setImage(img);
				
				
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		BoardService svc = new BoardServiceImpl();
		if (svc.addBoard(vo)) {
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("boardForm.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}//end execute

}
