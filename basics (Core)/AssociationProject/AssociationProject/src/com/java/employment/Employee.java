package com.java.employment;

import com.java.academic.Student;

public class Employee extends Student {
	private int empNumber;
	private String companyName;
	private String designation;
	private String departmentName;
	private double salary;
	
	public Employee(char gender, int age, String name, int rollNumber, String collegeName, String streamName,
			int empNumber, String companyName, String designation, String departmentName, double salary) {
		
		super(gender, age, name, rollNumber, collegeName, streamName);
		this.empNumber = empNumber;
		this.companyName = companyName;
		this.designation = designation;
		this.departmentName = departmentName;
		this.salary = salary;
	}
	
	
	@Override
	public String toString() {
		return "Employee [toString()=" + super.toString() + ", empNumber=" + empNumber + ", companyName=" + companyName
				+ ", designation=" + designation + ", departmentName=" + departmentName + ", salary=" + salary + "]";
	}


	public void printEmployee() {
		super.printStudent();
		System.out.println("Emp Number    : "+empNumber);
		System.out.println("Company Name  : "+companyName);
		System.out.println("Designation   : "+designation);
		System.out.println("Deparmtent    : "+departmentName);
		System.out.println("Basic Salary  : "+salary);
		System.out.println("--------------------------");
	}
	
}
