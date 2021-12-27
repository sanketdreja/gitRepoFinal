package com.java;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	public static void main(String[] args) {

		ApplicationContext container = new ClassPathXmlApplicationContext("SpringConfig.xml");
		Car theCar = (Car) container.getBean("mycar");

		theCar.startCar();
		System.out.println("Done");
		Department mydept1 = (Department) container.getBean("mydept1");
		Department mydept2 = (Department) container.getBean("mydept2");
		Department mydept3 = (Department) container.getBean("mydept3");
//		mydept1.setDepartmentNo(124);
//		mydept1.setDepartmentName("TEST");
//		mydept1.setDepartmentLoc("AAA");
//
//		mydept2.setDepartmentNo(124);
//		mydept2.setDepartmentName("TEST");
//		mydept2.setDepartmentLoc("AAA");
//
//		mydept3.setDepartmentNo(124);
//		mydept3.setDepartmentName("TEST");
//		mydept3.setDepartmentLoc("AAA");

		System.out.println("deptno : " + mydept1.getDepartmentNo(124));
		System.out.println("deptname : " + mydept1.getDepartmentName());
		System.out.println("deptLoc : " + mydept1.getDepartmentLoc());

		System.out.println("-------------------------------------");
		System.out.println("deptno : " + mydept2.getDepartmentNo(124));
		System.out.println("deptname : " + mydept2.getDepartmentName());
		System.out.println("deptLoc : " + mydept2.getDepartmentLoc());

		System.out.println("-------------------------------------");
		System.out.println("deptno : " + mydept3.getDepartmentNo(124));
		System.out.println("deptname : " + mydept3.getDepartmentName());
		System.out.println("deptLoc : " + mydept3.getDepartmentLoc());
		// System.out.println(thedept);
		System.out.println("-------------------------------------");

//		System.out.println("Done");
//		Employee emp1 = (Employee) container.getBean("myemp1");
//		Employee emp2 = (Employee) container.getBean("myemp2");
//		Employee emp3 = (Employee) container.getBean("myemp3");
//		
//		emp1.setEmpNo(007);
//		emp1.setEmpName("TEST");
//		emp1.setEmpSal(20000);
//		
//		emp2.setEmpNo(008);
//		emp2.setEmpName("TEST");
//		emp2.setEmpSal(20000);
//		
//		emp3.setEmpNo(009);
//		emp3.setEmpName("TEST");
//		emp3.setEmpSal(20000);
//		System.out.println("-------------------------------------");
//		System.out.println("EMP NUM : " + emp1.getEmpNo(007));
//		System.out.println("deptname : " + emp1.getDepartmentName());
//		System.out.println("deptLoc : " + emp1.getDepartmentLoc());
//		// System.out.println(thedept);
//		System.out.println("-------------------------------------");
		
		

	}
}
