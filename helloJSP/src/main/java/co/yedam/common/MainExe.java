package co.yedam.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

public class MainExe {
	public static void main(String[] args) {
		SimpleDateFormat sdf =  new SimpleDateFormat("yyyy-MM-dd");
		StudentVO vo = new StudentVO();
		
//		vo.setStudentName("신입생");
//		vo.setStudentPwd("4444");
//		vo.setStudentDept("영문학과");
//		try {
//			vo.setStudentBirthday(sdf.parse("2011-11-01"));
//		} catch (ParseException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		vo.setStudentId("newbie");
		vo.setStudentId("cho");
		vo.setStudentName("조익수");
		vo.setStudentPwd("1212");
		vo.setStudentDept("기계공학과");
		try {
			vo.setStudentBirthday(sdf.parse("1993-12-12"));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		StudentService svc = new StudentServiceImpl();
//		if(svc.editStudent(vo)) {
//			System.out.println("정상 등록");
//		}else {
//			System.out.println("등록 안");
//		}
		
		if(svc.addStudent(vo)) {
			System.out.println("정상 등록");
		}else {
			System.out.println("등록 안됨");
		}
		
		svc.listStudent().forEach(student->{
			System.out.println(student);
		});
		
		
	}
}
