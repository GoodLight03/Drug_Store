package com.edu.drugstore.Entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "medicine")
@Table(name = "medicine")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Medicine {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String type;
  private Date dateMan;
  private Date vexpiry;
  private int quantity;
  private float price;
  public Medicine(String name, String type, Date dateMan, Date vexpiry, int quantity, float price) {
    this.name = name;
    this.type = type;
    this.dateMan = dateMan;
    this.vexpiry = vexpiry;
    this.quantity = quantity;
    this.price = price;
  }
  
}
