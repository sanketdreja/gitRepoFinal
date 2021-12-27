package com.java.test;

import java.time.LocalDate;

import com.java.academic.Student;
import com.java.employment.Employee;
import com.java.personal.Person;
import com.java.personal.Story;

public class EmployeeTest {
	public static void main(String[] args) {
		
		Employee e1 = new Employee('M',52,"Rahul G",1234,"Harward University","ME ",8976,"NCP","Gold Vending Machine","PotattoToGold",45000);
		e1.getAadharCard().setAdhaarNumber("9999 9999 9999");
		e1.getAadharCard().setAddress("Central Avenue");
		e1.getAadharCard().setBirthdate(LocalDate.of(1970, 11,11));
		e1.getAadharCard().setNameOnAdhaar("Rahul G");
		e1.getAadharCard().setImageUrl("Rahul.jpeg");
		
		e1.printEmployee();
		
		
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











