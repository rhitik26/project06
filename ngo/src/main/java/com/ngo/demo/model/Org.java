package com.ngo.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;

public class Org {
	@Id
	private String orgId;
	private String orgName;
	private String orgEmail;
	private String orgPassword;
	private String orgCity;
	private String orgAddress;
	private String orgPhone;
	private String orgZip;
	private List<Cart> carts;
	
	public Org() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public List<Cart> getCarts() {
		return carts;
	}



	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}



	



	public Org(String orgId, String orgName, String orgEmail, String orgPassword, String orgCity, String orgAddress,
			String orgPhone, String orgZip, List<Cart> carts) {
		super();
		this.orgId = orgId;
		this.orgName = orgName;
		this.orgEmail = orgEmail;
		this.orgPassword = orgPassword;
		this.orgCity = orgCity;
		this.orgAddress = orgAddress;
		this.orgPhone = orgPhone;
		this.orgZip = orgZip;
		this.carts = carts;
	}



	public String getOrgId() {
		return orgId;
	}

	public void setOrgId(String orgId) {
		this.orgId = orgId;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}

	public String getOrgEmail() {
		return orgEmail;
	}

	public void setOrgEmail(String orgEmail) {
		this.orgEmail = orgEmail;
	}

	public String getOrgPassword() {
		return orgPassword;
	}

	public void setOrgPassword(String orgPassword) {
		this.orgPassword = orgPassword;
	}

	public String getOrgCity() {
		return orgCity;
	}

	public void setOrgCity(String orgCity) {
		this.orgCity = orgCity;
	}

	public String getOrgAddress() {
		return orgAddress;
	}

	public void setOrgAddress(String orgAddress) {
		this.orgAddress = orgAddress;
	}

	public String getOrgPhone() {
		return orgPhone;
	}

	public void setOrgPhone(String orgPhone) {
		this.orgPhone = orgPhone;
	}

	public String getOrgZip() {
		return orgZip;
	}

	public void setOrgZip(String orgZip) {
		this.orgZip = orgZip;
	}
}
