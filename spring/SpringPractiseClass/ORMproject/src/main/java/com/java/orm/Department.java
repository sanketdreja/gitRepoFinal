package com.java.orm;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dept")
public class Department {
	@Id
	@Column(name = "deptno")
	private int departmenNumber;
	
	@Column(name = "dname")
	private String departmentName;
	
	@Column(name = "loc")
	private String departmentLoc;

	public int getDepartmenNumber() {
		return departmenNumber;
	}

	public void setDepartmenNumber(int departmenNumber) {
		this.departmenNumber = departmenNumber;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getDepartmentLoc() {
		return departmentLoc;
	}

	public void setDepartmentLoc(String departmentLoc) {
		this.departmentLoc = departmentLoc;
	}



}
