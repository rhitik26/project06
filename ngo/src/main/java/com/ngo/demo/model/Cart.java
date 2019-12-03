package com.ngo.demo.model;

import org.springframework.data.annotation.Id;

public class Cart {
@Id
private String foodId;
private String foodname;
private String foodprice;
private String foodquant;
public Cart() {
	super();
}

public Cart(String foodId, String foodname, String foodprice, String foodquant) {
	super();
	this.foodId = foodId;
	this.foodname = foodname;
	this.foodprice = foodprice;
	this.foodquant = foodquant;
}

public String getFoodId() {
	return foodId;
}
public void setFoodId(String foodId) {
	this.foodId = foodId;
}
public String getFoodname() {
	return foodname;
}
public void setFoodname(String foodname) {
	this.foodname = foodname;
}
public String getFoodprice() {
	return foodprice;
}
public void setFoodprice(String foodprice) {
	this.foodprice = foodprice;
}
public String getFoodquant() {
	return foodquant;
}
public void setFoodquant(String foodquant) {
	this.foodquant = foodquant;
}
}
