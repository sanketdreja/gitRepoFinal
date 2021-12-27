package com.java.orm;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


public class Emp {
 
	@Entity
	@Column(name = "eno")
	private int Eno;
	
	public int getEno() {
		return Eno;
	}
	public void setEno(int eno) {
		Eno = eno;
	
	}
	
	
	
	public String getEname() {
		return Ename;
	}
	public void setEname(String ename) {
		Ename = ename;
	}
	public String getEloc() {
		return Eloc;
	}
	public void setEloc(String eloc) {
		Eloc = eloc;
	}
	@Column(name = "ename")
	private String Ename;
	@Column(name = "eloc")
	private String Eloc;
}
