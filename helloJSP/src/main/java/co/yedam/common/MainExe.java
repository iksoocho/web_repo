package co.yedam.common;


import java.util.List;
import java.util.Map;

import javax.annotation.processing.SupportedSourceVersion;

import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;

public class MainExe {
	public static void main(String[] args) {
		

		
		
		SqlSession session = DataSourceMybatis.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		
		List<Map<String, Object>> map = mapper.getReplyCountByWriter();
		System.out.println(map);
		
		
		
		
		
		
	}
}
