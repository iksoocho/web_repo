package co.yedam.product.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSourceMybatis;
import co.yedam.product.mapper.ProductMapper;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;

public class ProductServiceImpl implements ProductService {

	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);
	ProductMapper mapper = sqlSession.getMapper(ProductMapper.class);
	
	
	@Override
	public List<ProductVO> productList() {
		// TODO Auto-generated method stub
		return mapper.list();
	}

	@Override
	public ProductVO productSelect(String prodCode) {
		// TODO Auto-generated method stub
		return mapper.select(prodCode);
	}

}
