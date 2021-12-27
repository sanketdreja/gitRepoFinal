package com.java.abstracttest;

/*
 abstract | incomplete | partial 
  
  
 1 	  Game <-- pure partial
  	   |
  --------------
  |			|
2 InDoor	OutDoor <-- partial
  |			|
3 Chess		FootBall
  
  
  Construction	Received 	Perceive
  
  
  
  Framework : semi developed applicaiton
  
1  			Instrument <-- interface
  				|use();
  		----------------------------------
  		|						|
2  MusicalInstrument		MedicalInstrument <-- abstract classes 
  		|play();						|operate();
  -------------------------			-----------------------------
  |				       |					|				|	
3 StringBased		   AirBased			Surgical			Pathalogical	
  MusicalInstrument   MusicalInstrument MedicalInstrument	MedicalInstrument
 	|tuneStrings();		   |blowAir();	|steralize();		|count();						|
	|		 |		|	   |			|	|				|
4  Guitar	 Sitar Violin  Flute		Cutter Needle		ECGMAchine 			GlucoMeter
	|pluck()  ting() bow()	blow()		cut()	poke()		countHeartBeats()  countSugar()
	|				 |  
5 ElectronicGuitar  Cello
    presets();
  		
  
  	1						Vehicle
  								|move();
  				---------------------------------
  				|				|				|
  2				LandVehicle	 SeaVehicle		AirVehicle
  				|roadWay();		|waterWay();	|airWay();
  		------------------	-------------		----------------------
  		|		|		|	|		|			|		|		|
  3		Car		Bike  Train Boat	Ship	Rocket	Airplane	AirBaloon
  
*/


interface Instrument {
	void use(); //by default it is abstract and public 
}
abstract class MusicalInstrument implements Instrument
{
	abstract void play();
}
abstract class StringBasedMusicalInstrument extends MusicalInstrument
{
	abstract void tuneStrings(); //method without body
}

//The type Guitar must implement the inherited abstract 
//method StringBasedMusicalInstrument.tuneStrings()

//The type Guitar must implement the inherited abstract 
//method MusicalInstrument.play()

//The type Guitar must implement the inherited abstract method 
//Instrument.use()

class Guitar extends StringBasedMusicalInstrument
{
	 void tuneStrings() {
		 System.out.println("Tuning Guitar.....");
	 }
	 void play() {
		 System.out.println("Playing Guitar.....");
		 
	 }
	 public void use() {
		 System.out.println("Using Guitar.....");
	 }
	 void pluck() {
		 System.out.println("Plucking the Guitar strings...");
	 }
}

class Sitar extends StringBasedMusicalInstrument
{
	 void tuneStrings() {
		 System.out.println("Tuning Sitar.....");
	 }
	 void play() {
		 System.out.println("Playing Sitar.....");
		 
	 }
	 public void use() {
		 System.out.println("Using Sitar.....");
	 }
	 
	 void ting() {
		 System.out.println("Tinging the Guitar strings...");
	 }
}



class Violin extends StringBasedMusicalInstrument
{
	 void tuneStrings() {
		 System.out.println("Tuning Violin.....");
	 }
	 void play() {
		 System.out.println("Playing Violin.....");
		 
	 }
	 public void use() {
		 System.out.println("Using Violin.....");
	 }
	 void bowing() {
		 System.out.println("Bowing the Violin strings...");
	 }
}

class MusicShow
{
	void perform(Guitar x) {
		x.use();
		x.tuneStrings();
		x.play();
		
		//x.tinging();
		//x.bowing();
		x.pluck();
		
	}
}


public class AbstractTest {
	public static void main(String[] args) {
		
		Guitar guitar = new Guitar();
		Sitar sitar = new Sitar();
		Violin vio = new Violin();
		
		MusicShow musShow = new MusicShow();
		musShow.perform(guitar);
		//musShow.perform(sitar);
		//musShow.perform(vio);
		
	}
}








