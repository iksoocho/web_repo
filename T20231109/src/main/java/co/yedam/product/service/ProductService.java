package co.yedam.product.service;

import java.util.List;



public interface ProductService {
	public List<ProductVO> productList();
	public ProductVO productSelect(String prodCode);
	
	public List<ProductVO> dayList(String bdate);
}
