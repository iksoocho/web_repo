package co.yedam.student.service;

import java.util.Date;

import lombok.Data;

@Data
public class StudentVO {
	private String studentId;
	private String studentName;
	private String studentPwd;
	private String studentDept;
	private Date studentBirthday;
}
