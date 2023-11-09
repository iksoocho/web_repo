package co.yedam.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.yedam.board.service.MemberVO;
import co.yedam.board.service.BoardVO;



public interface BoardMapper {
	public List<BoardVO> list();
	public BoardVO select(int boardNo);
	public int updateCnt(int boardNo);
	public int insert(BoardVO vo);
	public int update(BoardVO vo);
	public int delete(int boardNo);
	public List<MemberVO> listMem();
	public MemberVO getUser(@Param("id") String id, @Param("pw") String pw);
}
