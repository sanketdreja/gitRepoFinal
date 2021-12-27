package com.java.anno;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
@Component("theCEO")
@Scope("prototype")
public class CEO extends ProjectMan{
    
	
@Autowired
@Qualifier("PM1")
	CEO  pm1; 
	
//	@Qualifier("PM2")
//	ProjectMan pm2 =new ProjectMan();
//	@Qualifier("PM3")
//	ProjectMan pm3 =new ProjectMan();
	
	
	public void startProject(){
		System.out.println("CEO is Starting the Project");
pm1.startProject();
	}
	
	
	
}
