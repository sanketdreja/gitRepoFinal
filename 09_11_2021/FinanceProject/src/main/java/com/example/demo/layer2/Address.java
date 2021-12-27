package com.example.demo.layer2;

public class Address {
	private String addressLine;
	private String state;
	private String city;
	private int postalCode;

	public Address(String addressLine, String state, String city, int postalCode) {
		super();
		this.addressLine = addressLine;
		this.state = state;
		this.city = city;
		this.postalCode = postalCode;
	}

	public String getAddressLine() {
		return addressLine;
	}

	public void setAddressLine(String addressLine) {
		this.addressLine = addressLine;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(int postalCode) {
		this.postalCode = postalCode;
	}

}
