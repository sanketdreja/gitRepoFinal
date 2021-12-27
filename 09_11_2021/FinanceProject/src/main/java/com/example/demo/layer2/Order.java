package com.example.demo.layer2;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class Order {
	@Column(name = "orderid")
	private int oriderId;
	
	@ManyToOne
	@JoinColumn(name = "userid")
	private int userId;
	
	@ManyToOne
	@JoinColumn(name = "productid")
	
	private int productId;
	@Column(name = "quantity")
	private int quantity;
	@Column(name = "orderdate")
	private LocalDate orderDate;
	@Column(name = "deliverystatus")
	private String deliveryStatus;
	@Column(name = "totalorderprice")
	private float totalOrderPrice;

}
