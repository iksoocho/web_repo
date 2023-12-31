package co.yedam.reply.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class RemoveReplyCintrol implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		
		ReplyService svc = new ReplyServiceImpl();

		String rno = req.getParameter("rno");

		

		Map<String, String> map = new HashMap<>();

		if (svc.delReply(Integer.parseInt(rno))) {
			try {
				map.put("retCode", "OK");
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			try {
				map.put("retCode", "NG");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		
		resp.setContentType("text/json; charset=UTF-8");
		try {
			resp.getWriter().print(gson.toJson(map));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}


