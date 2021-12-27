package com.java.personal;

import java.time.LocalDate;

public class AadharCard {
	
	private String adhaarNumber; //12 digits  1234 1234 1234
	private String nameOnAdhaar;
	private LocalDate birthdate;
	private String address;
	private String imageUrl; // images/pic.jpeg
	
	@Override
	public String toString() {
		return "AadharCard [adhaarNumber=" + adhaarNumber + ", nameOnAdhaar=" + nameOnAdhaar + ", birthdate="
				+ birthdate + ", address=" + address + ", imageUrl=" + imageUrl + "]";
	}
	public String getAdhaarNumber() {
		return adhaarNumber;
	}
	public void setAdhaarNumber(String adhaarNumber) {
		this.adhaarNumber = adhaarNumber;
	}
	public String getNameOnAdhaar() {
		return nameOnAdhaar;
	}
	public void setNameOnAdhaar(String nameOnAdhaar) {
		this.nameOnAdhaar = nameOnAdhaar;
	}
	public LocalDate getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	void printAdhaarCard() {
		System.out.println("--------------------------");
		System.out.println("Adhaar Number : "+adhaarNumber);
		System.out.println("Name on Adhar : "+nameOnAdhaar);
		System.out.println("Birth DAte    : "+birthdate);
		System.out.println("Address       : "+address);
		System.out.println("Image         : "+imageUrl);  
		System.out.println("--------------------------");
		
	}
	
}
