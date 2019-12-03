package com.ngo.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ngo.demo.model.Org;

public interface OrgRepo extends MongoRepository<Org,String>{
Org  findByOrgName(String orgName);
}
