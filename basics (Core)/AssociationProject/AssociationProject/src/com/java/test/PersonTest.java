package com.java.test;

import java.time.LocalDate;

import com.java.personal.AadharCard;
import com.java.personal.Person;
import com.java.personal.Story;

public class PersonTest {
	public static void main(String[] args) {
		
		Person p1 = new Person('F',22,"Julie");
		p1.getAadharCard().setAdhaarNumber("1234 1234 1234");
		p1.getAadharCard().setAddress("West Avenue");
		p1.getAadharCard().setBirthdate(LocalDate.of(1999, 12,11));
		p1.getAadharCard().setNameOnAdhaar("Julie Dsouza");
		p1.getAadharCard().setImageUrl("julie.jpeg");
		
	//	System.out.println("person p1 is : "); //p1.toString()
		
		Person p2 = new Person('F',25,"Rita");
		AadharCard ac = p2.getAadharCard();
			ac.setAdhaarNumber("1234 4567 7899");
			ac.setAddress("East Avenue");
			ac.setBirthdate(LocalDate.of(1998, 10,12));
			ac.setNameOnAdhaar("Rita Dmello");
			ac.setImageUrl("Rita.jpeg");
		p2.setAadharCard(ac);
		
	//	System.out.println("person p2 is : "); //p2.toString()
	
		Person p3 = new Person('F',23,"Julia");
		p3.aadharCard.setAdhaarNumber("4567 1234 8899");
		p3.aadharCard.setAddress("North Avenue");
		p3.aadharCard.setBirthdate(LocalDate.of(1997, 11,10));
		p3.aadharCard.setNameOnAdhaar("Julia Dcunha");
		p3.aadharCard.setImageUrl("Julia.jpeg");
		
	//	System.out.println("person p3 is : ");
		
	//	Story whatsTheStory = p2.gossip(p1,p3);
		
	//	System.out.println(whatsTheStory.getStoryLines());
		
		p1.printPerson();
		p2.printPerson();
		p3.printPerson();
		
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











