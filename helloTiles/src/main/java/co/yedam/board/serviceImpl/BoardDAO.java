package co.yedam.board.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.BoardVO;
import co.yedam.board.service.MemberVO;
import co.yedam.common.DataSource;

public class BoardDAO {
	// 목록, 단건조회, 등록, 수정, 삭제
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	String sql;
	DataSource ds = DataSource.getInstance();

	public void close() {
		try {
			if (rs != null) {
				rs.close();
			}
			if (psmt != null) {
				psmt.close();
			}
			if (conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public List<BoardVO> list() {
		sql = "select * from board order by board_no";
		conn = ds.getConnection();
		List<BoardVO> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				BoardVO vo = new BoardVO();
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setContent(rs.getString("content"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setTitle(rs.getString("title"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setWriteDate(rs.getDate("write_date"));
				vo.setWriter(rs.getString("writer"));
				list.add(vo);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close();
		}
		return list;
	}
	

	public BoardVO select(int boardNo) {
		sql = "select * from board where board_no = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			rs=psmt.executeQuery();
			if(rs.next()) {
				BoardVO vo = new BoardVO();
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setContent(rs.getString("content"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setTitle(rs.getString("title"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setWriteDate(rs.getDate("write_date"));
				vo.setWriter(rs.getString("writer"));
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

	public int insert(BoardVO vo) {
		sql = "insert into board(board_no,content,title,writer,image) "
				+ "values(seq_board.nextval,?,?,?,?)";
		conn = ds.getConnection();
		SimpleDateFormat sdf =  new SimpleDateFormat("yyyy-MM-dd");
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getContent());
			psmt.setString(2, vo.getTitle());
			psmt.setString(3, vo.getWriter());
			psmt.setString(4, vo.getImage());
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

	public int update(BoardVO vo) {
		sql = "update board set content=?,image=nvl(?, image),last_update=sysdate, "
				+ "title=? "
				+ "where board_no=?";
		conn = ds.getConnection();
		SimpleDateFormat sdf =  new SimpleDateFormat("yyyy-MM-dd");
		try {
			psmt =conn.prepareStatement(sql);
			psmt.setString(1, vo.getContent());
			psmt.setString(2,vo.getImage());
			psmt.setString(3, vo.getTitle());
			psmt.setInt(4, vo.getBoardNo());
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

	public int delete(int boardNo) {
		sql = "delete from board where board_no=?";
		conn = ds.getConnection();
		int rowNo = 1;
		try {
			psmt=conn.prepareStatement(sql);
			psmt.setInt(rowNo++, boardNo);
			int r =psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	}
	
	//조회수 증가
	public int updateCnt(int boardNo) {
		sql = "update board set view_cnt=view_cnt+1 where board_no=?";
		conn = ds.getConnection();
		int rowNo = 1;
		try {
			psmt=conn.prepareStatement(sql);
			psmt.setInt(rowNo++, boardNo);
			int r =psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	}
	
	//로그인 처리(아이디와 비밀번호를 받아서 > 결과는 boolean)
	public MemberVO getUser(String id, String pw) {
		sql = "select * from member where mid=? and pass=?";
		conn = ds.getConnection();
		try {
			
			psmt=conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			rs=psmt.executeQuery();
			if(rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setPass(rs.getString("pass"));
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				vo.setResponsibility(rs.getString("responsibility"));
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
	
	public List<MemberVO> listMem() {
		sql = "select * from member ";
		conn = ds.getConnection();
		List<MemberVO> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setPass(rs.getString("pass"));
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				vo.setResponsibility(rs.getString("responsibility"));
				list.add(vo);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close();
		}
		return list;
	}
	
	

}
