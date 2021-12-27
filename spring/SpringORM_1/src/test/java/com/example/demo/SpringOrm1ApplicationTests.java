package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.layer2.Department;
import com.example.demo.layer3.DepartmentRepositoryImpl;

@SpringBootTest
class SpringOrm1ApplicationTests {

	@Autowired
	DepartmentRepositoryImpl deptRepo;

	@Test
	void insertDeptTest() {
		Department dept = new Department();
		dept.setDepartmentNumber(370);
		dept.setDepartmentName("QA");
		dept.setDepartmentLocation("Pune");
		deptRepo.insertDepartment(dept);

	}
	@Test
	void insertDeptTest2() {
		Department dept = new Department();
		dept.setDepartmentNumber(372);
		dept.setDepartmentName("Developer");
		dept.setDepartmentLocation("Pune");
		deptRepo.insertDepartment(dept);

	}


}
