package co.yedam.student.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.student.service.StudentVO;

public class StudentDAO {
	DataSource ds =DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	private void close() {
		// DB작업 종료 후 Connection를 ㄷ바음
		try {
			if(rs != null) {
				rs.close();
			}
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
	
	
	public int insert(StudentVO vo) {
		String sql = "insert into student(student_id,student_name, "
				+ "student_pwd,student_dept,student_birthday) "
				+ "values(?,?,?,?,?)";
		conn = ds.getConnection();
		SimpleDateFormat sdf =  new SimpleDateFormat("yyyy-MM-dd");
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getStudentId());
			psmt.setString(2, vo.getStudentName());
			psmt.setString(3, vo.getStudentPwd());
			psmt.setString(4, vo.getStudentDept());
			psmt.setString(5, sdf.format(vo.getStudentBirthday()));
			int r = psmt.executeUpdate();
			return r;
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;  //처리된 건수가 없음>에러
	}
	
	public int update(StudentVO vo) {
		String sql = "update student set student_name=?, "
				+ "student_pwd=?,student_dept=?,student_birthday=? "
				+ "where student_id=?";
		conn = ds.getConnection();
		SimpleDateFormat sdf =  new SimpleDateFormat("yyyy-MM-dd");
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getStudentName());
			psmt.setString(2, vo.getStudentPwd());
			psmt.setString(3, vo.getStudentDept());
			psmt.setString(4, sdf.format(vo.getStudentBirthday()));
			psmt.setString(5, vo.getStudentId());
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	}
	
	public int delete(String sid) {
		String sql = "delete from student where student_id=?";
		conn = ds.getConnection();
		int rowNo = 1;
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(rowNo++, sid);
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	}
	
	public StudentVO select(String sid) {
		String sql = "select * from student where student_id=?";
		conn = ds.getConnection();
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, sid);
			rs = psmt.executeQuery();
			if(rs.next()) {
				StudentVO vo = new StudentVO();
				vo.setStudentId(rs.getString("student_id"));
				vo.setStudentName(rs.getString("student_name"));
				vo.setStudentPwd(rs.getString("student_pwd"));
				vo.setStudentDept(rs.getString("student_dept"));
				vo.setStudentBirthday(rs.getDate("student_birthday"));
				return vo;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			close();
		}
		return null;
	}
	
	
	public List<StudentVO> list(){
		List<StudentVO> students = new ArrayList<>();
		String sql = "SELECT*FROM student";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				StudentVO vo = new StudentVO();
				vo.setStudentId(rs.getString("student_id"));
				vo.setStudentName(rs.getString("student_name"));
				vo.setStudentPwd(rs.getString("student_pwd"));
				vo.setStudentDept(rs.getString("student_dept"));
				vo.setStudentBirthday(rs.getDate("student_birthday"));
				students.add(vo);
				
			}
			return students;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			close();
		}
		return null;
	}
	
	
	
	
	
	
}
