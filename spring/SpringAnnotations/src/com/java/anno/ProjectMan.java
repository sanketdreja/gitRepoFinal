package com.java.anno;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component ("PM1")
@Scope("prototype")
public class ProjectMan extends Emp1 {
	@Value("Airline Project")
	private String project;
    
//	@Autowired
//	@Qualifier("Emp1")
	//CEO e1 ;
//	@Qualifier("Emp1")
//	Emp1 e2 = new Emp1();
//	@Qualifier("Emp1")
//	Emp1 e3 = new Emp1();
    
	
	public void startProject(){
	
		System.out.println("Project Manager1 is Starting the Project");
	     
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}
}
