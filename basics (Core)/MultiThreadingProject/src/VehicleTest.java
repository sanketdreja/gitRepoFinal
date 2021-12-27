import java.awt.FlowLayout;

import javax.swing.JFrame;
import javax.swing.JTextField;

public class VehicleTest {
	public static void main(String[] args) {
		
		Car theCar = new Car();
		Ship theShip = new Ship();
		Airplane thePlane = new Airplane();
		
		Thread t1 = new Thread(theCar);
		Thread t2 = new Thread(theShip);
		Thread t3 = new Thread(thePlane);
		
		t1.setPriority(Thread.MIN_PRIORITY); //1
		t2.setPriority(Thread.NORM_PRIORITY); //5- default
		t3.setPriority(Thread.MAX_PRIORITY); //10
		
		t1.start();
		t2.start();
		t3.start();
		
	}
}

class Car extends JFrame implements Runnable // Thread
{
	public void run() {
		for(int i=0;i<10000000;i++) {
			//System.out.println("Driven "+i+" Kms");
			data.setText("Driving "+i);
		}
	}
	 
	JTextField data = new JTextField(20); //ctrl + shift + M 
	
	Car() {
		setSize(300,100);
		setLocation(100,100);
		setLayout(new FlowLayout());
		add(data);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setVisible(true);
		
	}
}

class Ship extends JFrame implements Runnable // Thread
{
	public void run() {
		for(int i=0;i<10000000;i++) {
			//System.out.println("Sailed "+i+" NMiles");
			data.setText("Sailing "+i);
		}
	}
	JTextField data = new JTextField(20); //ctrl + shift + M 
	
	Ship() {
		setSize(300,100);
		setLocation(300,300);
		setLayout(new FlowLayout());
		add(data);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setVisible(true);
	}
	
}

class Airplane extends JFrame implements Runnable // Thread
{
	public void run() {
		for(int i=0;i<10000000;i++) {
			//System.out.println("Flying "+i+" ANMiles");
			data.setText("Flying "+i);
		}
	}
	
	JTextField data = new JTextField(20); //ctrl + shift + M 
	
	Airplane() {
		setSize(300,100);
		setLocation(500,500);
		setLayout(new FlowLayout());
		add(data);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setVisible(true);
	}
}
