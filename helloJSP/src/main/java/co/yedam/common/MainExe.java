package co.yedam.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardDAO;

public class MainExe {
	public static void main(String[] args) {
		
		SimpleDateFormat sdf =  new SimpleDateFormat("yyyy-MM-dd");
		BoardDAO dao = new BoardDAO();
		BoardVO vo = new BoardVO();
//		
//		vo.setContent("안녕");
//		vo.setImage("a");
//		try {
//			vo.setLastUpdate(sdf.parse("2000-09-09"));
//		} catch (ParseException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		try {
//			vo.setWriteDate(sdf.parse("1993-12-12"));
//		} catch (ParseException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		vo.setWriter("익수");
//		vo.setTitle("java");
		
		vo.setContent("ggg");
		try {
			vo.setLastUpdate(sdf.parse("2020-09-09"));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println(dao.insert(vo));
		
		
		
		
		
		
		
	}
}
