package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

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

@WebServlet("/editStudent.do")
public class ModStudentServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("utf-8");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		StudentVO vo = new StudentVO();
		vo.setStudentId(req.getParameter("id"));
		vo.setStudentPwd(req.getParameter("pwd"));
		vo.setStudentName(req.getParameter("name"));
		vo.setStudentDept(req.getParameter("dept"));

		try {
			vo.setStudentBirthday(sdf.parse((req.getParameter("birth")))); // 파싱된 날짜를 설정
		} catch (ParseException e) {
			// 날짜 파싱에 실패한 경우 예외 처리
			e.printStackTrace(); // 또는 적절한 오류 처리를 수행할 수 있습니다.
		}

		StudentService svc = new StudentServiceImpl();
		

		Map<String, Object> map = new HashMap<>();

		if (svc.editStudent(vo)) {
			map.put("retCode", "OK");
			map.put("vo", vo);
		} else {
			map.put("retCode", "NG");
			map.put("vo", vo);
		}
		
		PrintWriter out = resp.getWriter();

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(map);
		out.print(json);

	}
}
