package com.labCollab.service;

import com.labCollab.model.*;
import com.labCollab.repository.FilterRepository;
import com.labCollab.repository.ProjectFilterRepository;
import com.labCollab.repository.ProjectRepository;
import com.labCollab.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;
    private final FilterRepository filterRepository;
    private final ProjectFilterRepository projectFilterRepository;

    @Transactional
    @Modifying
    public void populate(List<ProjectDAO> projects) {
        for (ProjectDAO projectDAO : projects) {
            Set<Filter> filters = updateFilters(projectDAO);
            Project project = Project.builder()
                    .project_name(projectDAO.getProject_name())
                    .project_url_on_catalog(projectDAO.getProject_url_on_catalog())
                    .project_url_external(projectDAO.getProject_url_external())
                    .project_description(projectDAO.getProject_description())
                    .fields_of_science(projectDAO.getFields_of_science())
                    .project_status(projectDAO.getProject_status())
                    .agency_sponsor(projectDAO.getAgency_sponsor())
                    .agency_sponsor_other(projectDAO.getAgency_sponsor_other())
                    .geographic_scope(projectDAO.getGeographic_scope())
                    .participant_age(projectDAO.getParticipant_age())
                    .project_goals(projectDAO.getProject_goals())
                    .participation_tasks(projectDAO.getParticipation_tasks())
                    .scistarter(projectDAO.getScistarter())
                    .email(projectDAO.getEmail())
                    .start_date(projectDAO.getStart_date())
                    .build();
            projectRepository.save(project);
            System.out.println(project.getId());
            for (Filter filter : filters) {
                projectFilterRepository.save(ProjectFilter.builder()
                        .filter(filter).project(project)
                        .build());
            }
//            project.setFilters(filters);
//            projectRepository.flush();
        }
    }

    public void addProject(Project project) {
//        for (User user : project.getUsers()) {
//            User newUser = userRepository.findById(user.getId()).orElse(null);
//            project.getUsers().add(newUser);
//        }
//        projectRepository.save(project);
    }

    public List<Project> getProjects(int pageNr) {
        Pageable pageable = PageRequest.of(pageNr, 3);
        return projectRepository.findAll1(pageable);
    }

    private Set<Filter> updateFilters(ProjectDAO projectDAO) {
        Set<Filter> filterList = new HashSet<>();
        for (String filterName : projectDAO.getKeywords().split(", ")) {
            Filter foundFilter = filterRepository.findByName(filterName).orElse(null);
            if (foundFilter == null) {
                Filter newFilter = Filter.builder()
                        .name(filterName)
                        .build();
                filterRepository.save(newFilter);
                filterList.add(newFilter);
            } else {
                filterList.add(foundFilter);
            }
        }
        return filterList;
    }
}
