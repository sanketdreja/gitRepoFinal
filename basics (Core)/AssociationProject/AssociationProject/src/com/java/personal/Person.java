package com.java.personal;

//equals(), hashCode(),
//wait() wait() wait(), notify() notifyAll()
//finalize()  getClass()
//toString(), clone()
//Object() <-- ctor 

class Mammal {
	void sleep() { }
}

public class Person extends Mammal /* extends Object */ {
	
	private char gender;
	private int age;
	private String name;
	public AadharCard aadharCard = new AadharCard();
	
	
	public AadharCard getAadharCard() {
		return aadharCard;
	}

	public void setAadharCard(AadharCard aadharCard) {
		this.aadharCard = aadharCard;
	}

	public  Person(char gender, int age, String name) {
		//super(); <-- default line of every constructor
		//it must be the first line
		
		System.out.println("Person(char,int,String) ctor called...");
		this.gender = gender;
		this.age = age;
		this.name = name;
	}
		
	public Person() {
		super();
		// TODO Auto-generated constructor stub
		System.out.println("Person() ctor called...");
	}

	@Override
	public String toString() {
		return "Person [gender=" + gender + ", age=" + age + ", name=" + name + "]";
	}
	
	public void printPerson() {
		System.out.println("Person Gender : "+gender);
		System.out.println("Person Age    : "+age);
		System.out.println("Person Name   : "+name);
		System.out.println("--------------------------");
		aadharCard.printAdhaarCard();
	}
	
	public void walk() {
		System.out.println("walking...");
	}
	public void eat() {
		System.out.println("eating...");
	}
	public void talk() {//which ref will invoke this method
		System.out.println(name+ " is talking...");
	}
	
	public void gossip() {
		System.out.println(name +" is Shhhh..gossiping...");
	}
	
	public void gossip(Person x) { //p3 is recieved here on x 
		System.out.println(name +" is Shhhh..gossiping...with "+x.name);
	}
	public Story gossip(Person x,Person y) { //p3 is recieved here on x 
		System.out.println(name +" is Shhhh..gossiping...with "+x.name+" and "+y.name);
		Story theStory = new Story();
		
		theStory.getStoryLines().append(name+" talking..u know what project i got, its airline, very nice...what is your project?");
		theStory.getStoryLines().append(x.name+" talking ...hey i got insurance project...very bad u know...");
		theStory.getStoryLines().append(y.name+" talking....i got average project, its just home loan...wow");
		return theStory;
	}
	
}
