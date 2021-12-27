package com.java.test;

import java.time.LocalDate;

import com.java.academic.Student;
import com.java.personal.Person;
import com.java.personal.Story;

public class StudentTest {
	public static void main(String[] args) {
		
		Student s1 = new Student('F',22,"Robert",123,"Bharati VidyaPeeth","Mechanical Eng");
		s1.getAadharCard().setAdhaarNumber("5555 3333 4444");
		s1.getAadharCard().setAddress("South Avenue");
		s1.getAadharCard().setBirthdate(LocalDate.of(1995, 12,11));
		s1.getAadharCard().setNameOnAdhaar("Robert Jackson");
		s1.getAadharCard().setImageUrl("Robert.jpeg");
		
		s1.printStudent();
		
		
	}
}
/*

	allocator will rollback the data if the constructor is failed
	
		data type  Allocator to create the structure
		|			  |		
		Person p1 = new Person('F',22,"Julie");
				|			 |
				reference  constructor to do initialization
				Name
				
	stack				heap [ free store ]
	
						<------Person----------->FIELDs
						gender	age		name
						-------------------------
						|	F	| 22	|Julie	|
						-------------------------
	+------------------>100
	|							METHOD AREA
	|								Person(...), Person()
	|								toString() + 12 methods of Object
	|								talk()
	100 <-- value of p1
	p1
	590 <-- address of p1

						<------Person----------->FIELDs
						gender	age		name
						-------------------------
						|		|0		|null	|
						-------------------------
	+------------------>200
	|							
	|								
	|								
	|					
	200 <-- value of p2
	p2
	690 <-- address of p2



						<------Person----------->FIELDs
						gender	age		name
						-------------------------
						|  F	| 23	|Julia	|
						-------------------------
	+------------------>300
	|							
	|								
	|								
	|					
	300 <-- value of p3
	p3
	790 <-- address of p3

	four types of methods in Computer programming
	
	
	1. function without argument + without return type
	
			void clearScreen() { }
	
	2. function with argument + but without return value
	
			void findSquare(int number) {
			
				int ans = number * number;
				
				sop(ans);
			}
			
	3. function with argument + with return value
	
			int findSquare(int number)
			{
					return number*number;
			}

	4. function without argument, but with return value
	
	 		long findTheDistanceBetweenTheEarthAndTheSun() {
	 			final float SPEED_OF_LIGHT=186000.519; //per sec
	 			final float TIME_TO_REACH_EARTH=480;
	 			final long DISTANCE = SPEED_OF_LIGHT * TIME_TO_REACH_EARTH;
	 			return DISTANCE;
	 		}
*/











