package com.labCollab.controller;

import com.labCollab.model.Filter;
import com.labCollab.model.User;
import com.labCollab.security.auth.AuthenticationRequest;
import com.labCollab.security.auth.AuthenticationResponse;
import com.labCollab.security.auth.AuthenticationService;
import com.labCollab.security.auth.UserRegisterRequest;
import com.labCollab.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final AuthenticationService service;

    @GetMapping("/all")
    @CrossOrigin("*")
    public ResponseEntity<List<User>> getAll() {
        return ResponseEntity.ok(userService.getUsers());
    }

    @PostMapping("/add")
    @CrossOrigin("*")
    public void postFilter(@RequestBody User user) {
        userService.addUser(user);
    }

    @PostMapping("/register")
    @CrossOrigin("*")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    @CrossOrigin("*")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
