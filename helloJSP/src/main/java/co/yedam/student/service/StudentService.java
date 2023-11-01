package co.yedam.student.service;

import java.util.List;

public interface StudentService {
	public List<StudentVO> listStudent ();
	public StudentVO getStudent(String sid);
	public boolean addStudent(StudentVO vo);
	public boolean editStudent(StudentVO vo);
	public boolean removeStudent(String sid);
}
