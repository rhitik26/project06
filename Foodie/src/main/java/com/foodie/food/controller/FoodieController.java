package com.foodie.food.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.foodie.food.model.Foodie;
import com.foodie.food.repo.FoodieRepo;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class FoodieController {
	
	@Autowired
	FoodieRepo frepo;
	
	@PostMapping("/foodie")
	public void createFoodie(@RequestBody Foodie foodie) {
		frepo.insert(foodie);
	}
	
	
	
	@GetMapping("/foodie")
	public List<Foodie> findAllFoodie(){
		return  frepo.findAll();
	}
	
		
	@DeleteMapping("/foodie/{id}")
	public void deleteFoodie(@PathVariable String id) {
		frepo.deleteById(id);
	}
	
	@GetMapping("/foodie/{id}")
	public Optional<Foodie> findFoodie(@PathVariable String id)
	{
		return frepo.findById(id);
	}
	
	
}
