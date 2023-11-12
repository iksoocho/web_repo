package co.yedam.product.web;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class ProductListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		String brdDate = (String) req.getParameter("brdDate");
		System.out.println("날짜값 "+ brdDate);
		
		ProductService svc = new ProductServiceImpl();
		List<ProductVO> list = svc.dayList(brdDate);
		
		req.setAttribute("list", list);
		
		list.forEach(item->System.out.println(item));
		
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/product/productList.jsp");//.forward(req, resp);
		try {
			rd.forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
