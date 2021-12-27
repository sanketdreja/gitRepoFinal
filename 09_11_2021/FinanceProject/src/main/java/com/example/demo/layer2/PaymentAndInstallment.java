package com.example.demo.layer2;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="")
public class PaymentAndInstallment {
  
	@Id
	@Column(name = "emiinstallmentno")
	private int emiInstallmentNo;
	@Column(name = "dateofpayment")
	private LocalDate dateOfPayment;
	@ManyToOne
	@JoinColumn("emicardno")
	private int emiCardNo;
	@Column(name = "amountpaid")
	private float amountPaid;
	@Column(name = "noofinstallment")
	private int noOfInstallment;
	@Column(name = "paymentstatus")
	private String paymentStatus;
	@ManyToOne
	@JoinColumn("orderid")
	private int orderId;
	
}
