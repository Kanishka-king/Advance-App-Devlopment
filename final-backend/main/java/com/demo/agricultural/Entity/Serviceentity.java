package com.demo.agricultural.Entity;




import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ApplyLoan")

public class Serviceentity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "email",nullable = false)
    private String email;
    @Column(name = "branch",nullable = false)
    private String branch;

    @Column(name = "mobile",nullable = false)
    private Long mobile;

    @Column(name = "scheme",nullable = false)
    private String scheme;

    @Column(name = "amount",nullable = false)
    private Integer amount;
    @Column(name = "purpose",nullable = false)
    private String purpose;
    @Column(name = "panCard",nullable = false)
    private String panCard;
    @Column(name = "salary",nullable = false)
    private Integer salary;
    @Column(name = "aadharNo",nullable = false)
    private Long aadharNo;
    @Column(name = "address",nullable = false)
    private String address;
   

}