package com.example.backendfurniture.repository;

import com.example.backendfurniture.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long>{

}
