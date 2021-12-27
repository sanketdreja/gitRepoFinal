package com.java.anno;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestAnno {
 public static void main(String[] args) {
	 System.out.println("Container is rloaded "); 
	 ApplicationContext container = new ClassPathXmlApplicationContext("SpringConfig.xml");
	 System.out.println("Container is Ready ");
//	  CEO ceo= container.getBean("theCEO",CEO.class);
	  
//	  ceo.startProject();
	 
	 
}
 
}
