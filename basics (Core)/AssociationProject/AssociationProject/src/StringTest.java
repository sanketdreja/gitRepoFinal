
public class StringTest {
	public static void main(String[] args) {
		//string pool <-- shared data / resource
		
		String flower =new String("Rose");
		System.out.println("flower "+flower);
		System.out.println("flower at : "+flower.hashCode());
		
		flower = "Red Rose";
		
		System.out.println("flower "+flower);
		System.out.println("flower at : "+flower.hashCode());
		
		
		String flower2 = new String("Rose");
		System.out.println("flower2 "+flower2);
		System.out.println("flower2 at : "+flower2.hashCode());
		
		String flower3 = "Rose";
		System.out.println("flower3 "+flower3);
		System.out.println("flower3 at : "+flower3.hashCode());
		
		System.out.println("----------");
		
		StringBuffer name1 = new StringBuffer("Rajesh");
		System.out.println("name1 "+name1);
		System.out.println("name1 "+name1.hashCode());
		name1.append(" Sharma");
		System.out.println("name1 "+name1);
		System.out.println("name1 "+name1.hashCode());
		
		StringBuffer name2 = new StringBuffer("Rajesh");
		System.out.println("name2 "+name2);
		System.out.println("name2 "+name2.hashCode());
		
		
		StringBuilder  name3 = new StringBuilder();
		
		
		
	}
}
/*

					Object
						|
						Mammal
						|
						Person
						|  gender,age,name,
						| AadharCard adhaarCard = new AadharCard();
						| PanCard pan = new PanCard();
						|
					---------
					|
					Student
					|rollno,college,stream + above fields
					|ReportCard rpt= new ReportCard();
					|
				------
				|
				Employee
					empno,company,desg,dept,salary + above fields
					SalarySlip jan21 = new SalarySlip();
					

							who?
							| db designer
							| developer, tester, deployer
							| designer, UI page author,
							|
					------------------
					|				|
				where				when
					|space			| time
			----------------------------------
			|				|				|
			why				what			how
			Reason			inFORMation		implementation
												|
											------------
											|		|
											success feedback
											
	Abstract classes and interfaces

		------------------------------------------------------

					field			method			class
		------------------------------------------------------
		
		final		constant/		cannot be		cannot be
					cannot be		overridden		extended
					changed
					PI=3.14
					MAX_SPEED
					SPEED_OF_LIGHT
					
		------------------------------------------------------

		static		sharable		to refer		nested 
					copy of 		other 			classes
					across the		static
					instances		members
		
		------------------------------------------------------

		abstract		NA			partial			optional
		/incomplete/				contract		partial
		 partial					of a class		contract
		 
		------------------------------------------------------


		static members			vs			non-static
		
		sharable data					unique copy per object
		across all
		the instances
		
		static function
		|
		to refer other
		static members
		
		
									k1	color
										length
			kiteCount					owner
										
										
									k2  c l o
									
									k3  c l o
									
									k4  c l o
		sky is empty
		
			
									Y
			Y <--color		Y		| <-color
			|  Green		|<-color|
			|				|  Red	| length
			|length			| length|
			|50m	 Y		A owner	| owner
			|		 |c	---------	|
			F<-owner |l	|		|	R
		---------	 |o	|		|--------
		|		|	L	|		|		|
		|		|-------|		|		|
		|		|		|		|		|
PL 4	|		|		|		|		|
------------------------------------------------



*/