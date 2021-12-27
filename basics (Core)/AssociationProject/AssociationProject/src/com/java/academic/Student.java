package com.java.academic;

import com.java.personal.Person;


public class Student extends Person { //isA
	
	private int rollNumber;
	private String collegeName;
	private String streamName;
	
	public Student(char gender, int age, String name, int rollNumber, String collegeName, String streamName) {
		
		super(gender, age, name);//invoke the super class ctor
		
		this.rollNumber = rollNumber;
		this.collegeName = collegeName;
		this.streamName = streamName;
	}

	@Override
	public String toString() {
		return "Student [toString()=" + super.toString() + ", rollNumber=" + rollNumber + ", collegeName=" + collegeName
				+ ", streamName=" + streamName + "]";
	}
	
	public void printStudent() {
		super.printPerson();
		System.out.println("Roll Number   : "+rollNumber);
		System.out.println("College Name  : "+collegeName);
		System.out.println("Stream Name   : "+streamName);
		System.out.println("--------------------------");
	}
	
}
