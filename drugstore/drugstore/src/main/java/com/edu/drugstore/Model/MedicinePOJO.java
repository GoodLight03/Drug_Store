package com.edu.drugstore.Model;

import java.util.Date;

import lombok.Data;

@Data
public class MedicinePOJO {
  private String name;
  private String type;
  private Date dateMan;
  private Date vexpiry;
  private int quantity;
  private float price;
}
