package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet("/getStudent.do")
public class GetStudentServlet extends HttpServlet{
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json;charset=utf-8");
		
		String sid = req.getParameter("id");
		
		StudentService svc = new StudentServiceImpl();
		StudentVO vo = svc.getStudent(sid);
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(vo);
		PrintWriter out = resp.getWriter();  //데이터 출력해주기
		out.println(json); 
		
		
//		if(svc.getStudent(sid)!=null) {
//			//{"retCode":"OK"}
//			resp.getWriter().print("{\"retCode\":\"OK\"}"); //화면에 출력 
//		}else {
//			//{"retCode":"NG"}
//			resp.getWriter().print("{\"retCode\":\"NG\"}");
//		}
		
		
		
		
	}
	
	
	
	
	
}
