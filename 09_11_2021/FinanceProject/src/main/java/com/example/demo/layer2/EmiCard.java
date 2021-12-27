package com.example.demo.layer2;

import javax.persistence.Column;

public class EmiCard {
	@Column(name = "cardtype")
 private String cardType;
	@Column(name = "cardlimit")
	private float cardLimit;
 
}
