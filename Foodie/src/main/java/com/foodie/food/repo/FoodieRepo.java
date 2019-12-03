package com.foodie.food.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.foodie.food.model.Foodie;


public interface FoodieRepo extends MongoRepository<Foodie,String> {

	void deleteById(String id);

	



	

	


		

}