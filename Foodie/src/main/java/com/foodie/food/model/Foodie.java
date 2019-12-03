package com.foodie.food.model;


import org.springframework.data.annotation.Id;

public class Foodie {
	@Id
	private String foodieId;
	private String foodieName;
	private String foodieEmail;
	private String foodiePassword;
	private String foodieCity;
	private String foodieAddress;
	private String foodiePhone;
	private String foodieZip;
	
	public Foodie() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Foodie(String foodieId, String foodieName, String foodieEmail, String foodiePassword, String foodieCity,
			String foodieAddress, String foodiePhone, String foodieZip) {
		super();
		this.foodieId = foodieId;
		this.foodieName = foodieName;
		this.foodieEmail = foodieEmail;
		this.foodiePassword = foodiePassword;
		this.foodieCity = foodieCity;
		this.foodieAddress = foodieAddress;
		this.foodiePhone = foodiePhone;
		this.foodieZip = foodieZip;
		
	}

	public String getFoodieId() {
		return foodieId;
	}

	public void setFoodieId(String foodieId) {
		this.foodieId = foodieId;
	}

	public String getFoodieName() {
		return foodieName;
	}

	public void setFoodieName(String foodieName) {
		this.foodieName = foodieName;
	}

	public String getFoodieEmail() {
		return foodieEmail;
	}

	public void setFoodieEmail(String foodieEmail) {
		this.foodieEmail = foodieEmail;
	}

	public String getFoodiePassword() {
		return foodiePassword;
	}

	public void setFoodiePassword(String foodiePassword) {
		this.foodiePassword = foodiePassword;
	}

	public String getFoodieCity() {
		return foodieCity;
	}

	public void setFoodieCity(String foodieCity) {
		this.foodieCity = foodieCity;
	}

	public String getFoodieAddress() {
		return foodieAddress;
	}

	public void setFoodieAddress(String foodieAddress) {
		this.foodieAddress = foodieAddress;
	}

	public String getFoodiePhone() {
		return foodiePhone;
	}

	public void setFoodiePhone(String foodiePhone) {
		this.foodiePhone = foodiePhone;
	}

	public String getFoodieZip() {
		return foodieZip;
	}

	public void setFoodieZip(String foodieZip) {
		this.foodieZip = foodieZip;
	}

	
	
}

	
	