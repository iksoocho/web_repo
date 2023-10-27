package org.yedam.service.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

public class MemberServiceImpl implements MemberService {
	private DataSource dao = DataSource.getInstance();
	private Connection conn;
	private PreparedStatement psmt;

	@Override
	public List<MemberVO> memberList() {
		List<MemberVO> member = new ArrayList<>();
		String sql = "SELECT*FROM MEMBER";

		try {
			conn = dao.getConnection();
			psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery();
			while(rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setPass(rs.getString("pass"));
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				member.add(vo);
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			close();
		}
		return member;

	}
	
	private void close() {
		// DB작업 종료 후 Connection를 ㄷ바음
		try {
			if (psmt != null) {
				psmt.close();
			}
			if (conn != null) {
				conn.close();
			} // 닫는 순서 주의
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}