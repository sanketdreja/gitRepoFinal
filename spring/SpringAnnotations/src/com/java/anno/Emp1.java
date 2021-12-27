package com.java.anno;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("Emp1")
public class Emp1 {

	@Value("python")
	private  String technology;
	
	public void startProject(){
		System.out.println("Emp1 is Starting the Project");
	}

	public String getTechnology() {
		return technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}
	
}






