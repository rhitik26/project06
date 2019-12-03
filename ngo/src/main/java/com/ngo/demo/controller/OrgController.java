package com.ngo.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
//
//import com.dxc.cook.model.Cook;
//import com.dxc.cook.model.FoodSelect;
import com.ngo.demo.model.Cart;
import com.ngo.demo.model.Org;
import com.ngo.demo.repository.OrgRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OrgController {
	@Autowired
	OrgRepo orepo;
	
	@PostMapping("/org")
	public void createOrg(@RequestBody Org org) {
		orepo.insert(org);
	}
	
	
	@GetMapping("/org")
	public List<Org> findAllOrgs(){
		return  orepo.findAll();
	}
	@PutMapping("/org/{name}")
	public void updatebyname(@RequestBody Org org,@PathVariable String name) {
		System.err.println(org);
	Org o = orepo.findByOrgName(name);
		List<Cart> presentList = o.getCarts();
		presentList.addAll(org.getCarts());
		o.setCarts(presentList);
		orepo.save(o);
	}
	
}
