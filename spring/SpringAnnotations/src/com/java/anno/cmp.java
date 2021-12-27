package com.java.anno;

import org.codehaus.plexus.component.annotations.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class cmp {
     
	@Autowired
	@Qualifier("theCeo")
	 CEO ceo;
	@Autowired
	@Qualifier("PM1")
	ProjectMan pm1;
	@Autowired
	@Qualifier("Emp1")
	Emp1 e1;
}
