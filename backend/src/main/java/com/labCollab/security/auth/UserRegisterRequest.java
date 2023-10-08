package com.labCollab.security.auth;

import com.labCollab.model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private LocalDate birthdate;
    private Role role;
}
