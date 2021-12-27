package com.java;

public class Department 
{
	private int departmentNo;
	private String departmentName;
	private String departmentLoc;
	
	public int getDepartmentNo(int departmentNo) {
		return this.departmentNo;
	}
	public void setDepartmentNo(int departmentNo) {
		this.departmentNo = departmentNo;
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
