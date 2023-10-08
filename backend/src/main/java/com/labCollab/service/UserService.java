package com.labCollab.service;

import com.labCollab.model.Project;
import com.labCollab.model.User;
import com.labCollab.repository.ProjectRepository;
import com.labCollab.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    public void addUser(User user) {
//        for(Project project: user.getProjectSet()){
//            Project newProject = projectRepository.findById(project.getId()).orElse(null);
//            assert newProject != null;
//            projectRepository.save(newProject);
//        }
        userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
