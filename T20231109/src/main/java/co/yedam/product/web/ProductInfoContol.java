package co.yedam.product.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class ProductInfoContol implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		String pcode = req.getParameter("pcode");
		ProductService svc = new ProductServiceImpl();
		ProductVO vo = svc.productSelect(pcode);
		
		List<ProductVO> list = svc.productList();
		
		req.setAttribute("list", list);
		
		req.setAttribute("pcode", vo);
		
		try {
			req.getRequestDispatcher("product/productInfo.tiles").forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		};
		
	}

}
