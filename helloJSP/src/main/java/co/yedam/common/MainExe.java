package co.yedam.common;


import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;

public class MainExe {
	public static void main(String[] args) {
		

		
		
		SqlSession session = DataSourceMybatis.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		ReplyVO vo = new ReplyVO();
		vo.setBoardNo(1);
		vo.setReply("ggg");
		vo.setReplyer("user09");
		
		
		
		
		System.out.println(mapper.insertReply(vo));
		
		
	}
}
