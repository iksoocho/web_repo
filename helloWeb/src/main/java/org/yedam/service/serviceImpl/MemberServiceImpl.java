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
		conn = dao.getConnection();

		try {
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

	@Override
	public boolean addMember(MemberVO vo) {
		String sql = "INSERT INTO MEMBER VALUES(?,?,?,?)";
		conn = dao.getConnection();
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getMid());
			psmt.setString(2, vo.getPass());
			psmt.setString(3, vo.getName());
			psmt.setString(4, vo.getPhone());
			
			int r = psmt.executeUpdate();  // 반환값은 데이터 처리 건수 
			if(r==1) {
				return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			close();
		}
		return false;
	}

	@Override
	public boolean modMember(MemberVO vo) {
		String sql = "UPDATE MEMBER SET PASS=?,NAME=?,PHONE=? WHERE MID=?";
		conn = dao.getConnection();
		try {
			psmt=conn.prepareStatement(sql);
			
			psmt.setString(1, vo.getPass());
			psmt.setString(2, vo.getName());
			psmt.setString(3, vo.getPhone());
			psmt.setString(4, vo.getMid());
			
			int r = psmt.executeUpdate();
			if(r ==1) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			close();
		}
		return false;
	}
}