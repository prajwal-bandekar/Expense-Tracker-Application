package org.leap.et.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.xml.ws.soap.MTOM;
import lombok.Data;

@Entity
@Data
public class Expense {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int eID;
	
	@Column(nullable=false)
	private String date;
	
	@Column(nullable=false)
	private double amount;
	
	@Column(nullable=false)
	private String category;
	
	
	@Column(nullable=false)
	private String description;
	
	@ManyToOne
	@JoinColumn(name="mID")
	@JsonIgnore
	private Member member;
	
}
