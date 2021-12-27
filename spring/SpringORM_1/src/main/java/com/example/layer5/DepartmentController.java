package com.example.layer5;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.layer2.Department;
import com.example.demo.layer3.DepartmentRepositoryImpl;

@RestController
@RequestMapping("/dept")
public class DepartmentController {

	@Autowired
	DepartmentRepositoryImpl deptRepo;

	@GetMapping("/get/{dno}") // localhost:8080/dept/get/371

	public Department getDept(@PathVariable("dno") int x) {
		Department dept;
		dept = deptRepo.selectDepartment(x);
		return dept;
	}

	@Autowired
	@GetMapping("/getAll") // localhost:8080/dept/getAll

	public List<Department> getDepts() {
		List<Department> deptList;
		deptList = deptRepo.selectDepartments();
		return deptList;
	}

	@Autowired
	@PostMapping("/add") // localhost:8080/dept/getAll

	public void addDept(@RequestBody Department deptObj) {
		deptRepo.insertDepartment(deptObj);

	}
}
