package com.example.backendfurniture.controller;

import com.example.backendfurniture.model.User;
import com.example.backendfurniture.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/login")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User newUser, @PathVariable Long id) {
        // Check if the user with the given ID exists
        if (userRepository.existsById(id)) {
            newUser.setId(id); // Set the ID of the updated user
            User updatedUser = userRepository.save(newUser);
            return ResponseEntity.ok(updatedUser);
        } else {
            // Return 404 Not Found if the user doesn't exist
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {

        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return ResponseEntity.ok("User with id " + id + " has been deleted successfully.");
        } else {
            // Return 404 Not Found if the user doesn't exist
            return ResponseEntity.notFound().build();
        }
    }
}
