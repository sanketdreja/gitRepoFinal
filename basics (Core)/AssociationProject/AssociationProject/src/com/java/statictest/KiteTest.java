package com.java.statictest;

class Kite
{
	private String kiteOwner;
	private String kiteColor;
	private int kiteLength;
	private boolean flying; //false
	
	private static int kiteCount;
	
	public static void showKiteCount() {
		System.out.println("Total kites : "+kiteCount);	
	}
	
	public Kite(String kiteOwner, String kiteColor, int kiteLength, boolean flying) {
		super();
		this.kiteOwner = kiteOwner;
		this.kiteColor = kiteColor;
		this.kiteLength = kiteLength;
		this.flying = flying;
		++kiteCount;
	}
	@Override
	public String toString() {
		return "Kite [kiteOwner=" + kiteOwner + ", kiteColor=" + kiteColor + ", kiteLength=" + kiteLength + ", flying="
				+ flying + "]";
	}
	
	void kiteFight(Kite x) {
		System.out.println(kiteColor+" kite ["+kiteOwner+"] initiated kite fight with "+x.kiteColor+" kite ["+x.kiteOwner+"]");
		double value = Math.random()%10;
		
		if(value>0.95) {
			--kiteCount;
			x.flying=false;
			System.out.println(kiteColor+" kite won and "+x.kiteColor+" kite is down");
		}
		else if(value<0.10) {
			--kiteCount;
			flying=false;
			System.out.println(x.kiteColor+" kite won and "+kiteColor+" kite is down");
		}
		else if( value>=0.50 && value <=0.75) {
			--kiteCount;
			--kiteCount;
			flying=false;
			x.flying=false;
			
			System.out.println("Both "+x.kiteColor+" and "+kiteColor+" kite is down");
		}
	}
}

public class KiteTest {
	public static void main(String[] args) {
	
		Kite.showKiteCount();
		
		Kite k1 = new Kite("Fazil","Green",50,true);
		Kite k2 = new Kite("Lakhan","Red",60,true);
		Kite k3 = new Kite("Ram","Yellow",40,true);
		Kite k4 = new Kite("Ajinkya","White",20,true);

		Kite.showKiteCount();

		k1.kiteFight(k2);
		
		Kite.showKiteCount();
	}
}
