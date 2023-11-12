package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import co.yedam.product.web.ProductInfoContol;
import co.yedam.product.web.ProductListControl;


public class FrontController extends HttpServlet {   //??.do 로 끝나면 항상 FrontController가 실행되는데 어떤 .do 냐 따라서 다른 매소드들을 실행해주기 위해 나눠놈

	Map<String, Command> map = new HashMap<>();

	@Override
	public void init() throws ServletException {
		System.out.println("원래들어가야될 컨트롤러");
		map.put("/productList.do", new ProductListControl());
		map.put("/productInfo.do", new ProductInfoContol());
		map.put("/main.do", new MainControl());
	
	
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//요청정보의 한글 인코딩 방식
		req.setCharacterEncoding("UTF-8");
		
		System.out.println("FrontController");
		String uri = req.getRequestURI(); // http://localhost:8080/helloJSP/??.do 에서 helloJSP/??.do가 uri    >>어떤 url이 들어오냐에 따라 다른 매소드들을 적용하기위해
		String context = req.getServletContext().getContextPath(); // =helloJSP
		String page = uri.substring(context.length());
		System.out.println(page);

		Command controller = map.get(page);
		controller.execute(req, resp);

	}

}
