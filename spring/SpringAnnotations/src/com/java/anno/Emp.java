//package com.java.anno;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Scope;
//import org.springframework.stereotype.Component;
//
//@Component("Java")
//@Scope("Prototype")
//public class Emp extends ProjectManager {
//
//	
//	public Emp() {
//		System.out.println("Emp Loaded"); // TODO Auto-generated constructor stub
//
//	}
//	
//	public void startProject(){
//		System.out.println("Emp started working on java.......");
//	}
//}
//



//
//class Employee { 
//	
//	private String projectTechnology;
//
//	public String getProjectTechnology() {
//		return projectTechnology;
//	}
//
//	public void setProjectTechnology(String projectTechnology) {
//		this.projectTechnology = projectTechnology;
//	}
//	
//	
//	
//}
//
//
//@Component("pm:")
//class ProjectManager2 extends Employee 
//{
//	Employee emp1 = new Employee(); //hasA - Spring
//	Employee emp2 = new Employee(); //hasA - react
//	Employee emp3 = new Employee(); //hasA - unix
//	Employee emp4 = new Employee(); //hasA - testing
//	
//}
//
//@Component("myceo")
//class CEO extends ProjectManager2 {
//	
//	@Autowired
//	@Qualll pm
//	ProjectManager2 promMan1;// = new ProjectManager2(); //banking
//	
//	@Autowired
//	@Quall pm
//	ProjectManager2 promMan2;// = new ProjectManager2(); //ariline
//	
//}
//
//class Founder extends CEO {
//
//	
//}
/*

class Company
[
	@Autowired
	@Qualifier("myceo")
	CEO ceo; 
}
*/



