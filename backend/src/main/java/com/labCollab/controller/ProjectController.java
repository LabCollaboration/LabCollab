package com.labCollab.controller;

import com.labCollab.model.Project;
import com.labCollab.model.ProjectDAO;
import com.labCollab.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    @GetMapping("/all/{pageNr}")
    @CrossOrigin("*")
    public ResponseEntity<List<Project>> getAll(@PathVariable int pageNr) {
        return ResponseEntity.ok(projectService.getProjects(pageNr));
    }

    @PostMapping("/add")
    @CrossOrigin("*")
    public void postProject(@RequestBody Project project) {
        projectService.addProject(project);
    }

    @PostMapping("/addAll")
    @CrossOrigin("*")
    public void postAllProjects(@RequestBody List<ProjectDAO> projects) {
        projectService.populate(projects);
    }
}
