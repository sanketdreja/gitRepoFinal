package com.java.anno;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("Emp2")
public class Emp2 {

	@Value("java")
	private  String technology;
	
	public void startProject(){
		System.out.println("Emp2 is Starting the Project");
	}

	public String getTechnology() {
		return technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}
	
}