package co.yedam.common;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class mainexe {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ProductService svc = new ProductServiceImpl();
		ProductVO vo = svc.productSelect("P001");
		
		System.out.println(vo);
		
		
	}

}
