package com.java.finaltest;

public class FinalMethodTest {
	public static void main(String[] args) {
			Chess chess = new Chess();
			chess.moveBishop();
			
			System.out.println("------");
			
			chess = new GraphicalChess();
			chess.moveBishop();
	
			
	}
}


class Chess
{
	@DevelopedBy(developer="Fazil",version=1.0)	
	final void moveBishop() { //Camel
		System.out.println("moveBishop() : maths moving diagonally...bidirectional multisteps... ");
	} //moveRook, moveKnite, moveQueen, moveKing
		//movePawn
}

class GraphicalChess extends Chess
{
	
	//Cannot override the final method from Chess
	@DevelopedBy(developer="Lakhan",version=2.0)
	void moveMyBishop() { //Camel
		//super.moveBishop();//use teh logic written by the super class developer
		System.out.println("moveBishop() : gui + mymath logic anywhere my bishop will move... ");
	} 

}

final class WebChess extends GraphicalChess
{
	
}
//The type RemoteChess cannot subclass the final class WebChess
//class RemoteChess extends WebChess {
	
//}


