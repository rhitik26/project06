package com.dxc.cook.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.cook.model.Cook;
import com.dxc.cook.model.FoodSelect;
import com.dxc.cook.repo.CookRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CookController {

	@Autowired
	private CookRepository cookRepo;

	@PostMapping("/cook")
	public void create(@RequestBody Cook cooks) {
		cookRepo.insert(cooks);
	}
	
	@GetMapping("/cook")
	public List<Cook> findAll(){
		return cookRepo.findAll();
	}
	
	@DeleteMapping("/cook/{id}")
	public void deleteByUser(@PathVariable String id) {
		cookRepo.deleteById(id);
	}
	
//	@PutMapping("/cook")
//	public void update(@RequestBody Cook cooks) {
//		cookRepo.save(cooks);
//	}
	@PutMapping("/cook/{name}")
	public void updatebyname(@RequestBody Cook cooks,@PathVariable String name) {
		System.err.println(cooks);
		Cook c = cookRepo.findByCookname(name);
		List<FoodSelect> presentList = c.getCookfoods();
		presentList.addAll(cooks.getCookfoods());
		c.setCookfoods(presentList);
		cookRepo.save(c);
	}
}

