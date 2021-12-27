package com.java.finaltest;

public class FinalFieldTest {
	public static void main(String[] args) {
		
		Circle circle1 = new Circle(130);
		circle1.showCircle();
		circle1.calculateArea();
		
		
		Circle circle2 = new Circle(330);
		circle2.showCircle();
		circle2.calculateArea();
		
		
		Car c1 = new Car("MH-12-AU-1234");
		Car c2 = new Car("MH-14-BU-2234");
		Car c3 = new Car("MH-16-RU-3234");
		
		System.out.println("c1 "+c1);
		System.out.println("c2 "+c2);
		System.out.println("c3 "+c3);
		
		
		
	}
}
/*				PI <-- static (sharable) copy
 * 			---------
 * 			|  3.14 |  final ( immutable )
 * 			---------
 * 												radius
 * 									-----------------------
 * 									|	|130		|
 * 									---------------------
 *  +----------------------------> 100
 * 	|
 *  100						Circle(), calculateArea(), showCircle()
 * 	circle1
 * 
 * 										radius
 * 									-----------------------
 * 									|	230				|
 * 									---------------------
 *  +----------------------------> 200
 * 	|
 *  200					
 * 	circle2
 * 
 * 		knowledge -->apply --> wisdom
 * 
 */
class Car
{
	private final String numberPlate;
	
	Car(String str) {
		numberPlate = str;
	}
	void setCar(String str) {
	//	numberPlate = str;
	}
	@Override
	public String toString() {
		return "Car [numberPlate=" + numberPlate + "]";
	}
	
	
}
class Circle
{
	private final static  float PI=3.14f; //universal constant
	private double radius;
	
	public Circle(double radius) {
		//PI=3.18f;//The final field Circle.PI cannot be assigned
		
		this.radius = radius;
	}
	
	void showCircle() {
		System.out.println("Circle with radius : "+radius);
	}
	
	void calculateArea() {
		double area = PI * radius * radius;
		System.out.println("Area of Circle : "+area);
	}
	
}
