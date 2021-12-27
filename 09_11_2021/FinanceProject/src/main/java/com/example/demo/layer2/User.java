package com.example.demo.layer2;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	@Id
	@Column(name = "userid")
	private int UserId;
	@Column(name = "dob")
	private LocalDate uDateOfBirth;
	@Column(name = "name")
	private String uName;
	@Column(name = "email")
	private String uEmail;
	@Column(name = "password")
	private String uPassword;
	@Column(name = "phone")
	private int uPhone;
	
	@OneToOne
	EmiCard emicard1=new EmiCard();
	private String uCardType;
	
	
	@Column(name = "pancard")
	private String uPanCard;
	@Column(name = "cibilscore")
	private int uCibilScore;
	@Column(name = "bankname")
	private String uBankName;
	@Column(name = "ifsc")
	private String uIFSC;
	@Column(name = "accountno")
	private int uAccountNo;
	@Column(name = "accountstatus")
	private String uAccountStatus;
	
	@OneToOne
	Emi emi1=new Emi();
	private int uEmiCardNo;
 
}
