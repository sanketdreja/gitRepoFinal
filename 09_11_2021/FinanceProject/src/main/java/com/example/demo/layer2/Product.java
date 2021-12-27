package com.example.demo.layer2;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.OneToMany;

public class Product {
	@Id
	@OneToMany
	 Set <Product> productSet = new HashSet<Product>();
	private int productId;
	@Column(name = "productname")
	private String productName;
	@Column(name = "productDetails")
	private String productDetails;
	@Column(name = "productCost")
	private String productCost;
	
}
