package com.labCollab.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="projects")
public class Project {
    @Id
    @GeneratedValue
    private Long id;

    private String project_name;
    private String project_url_on_catalog;
    private String project_url_external;
    @Column(length = 3000)
    private String project_description;

    @JsonIgnore
    @ManyToMany(mappedBy = "projects", fetch = FetchType.LAZY)
    private Set<Filter> filters;

    private String fields_of_science;
    private String project_status;
    private String agency_sponsor;
    private String agency_sponsor_other;
    private String geographic_scope;
    private String participant_age;
    private String project_goals;
    private String participation_tasks;
    private String scistarter;
    private String email;
    private String start_date;


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = User.class)
    @JoinTable(name = "users_projects",
            joinColumns = @JoinColumn(name = "users_id"),
            inverseJoinColumns = @JoinColumn(name = "projects_id"),
            uniqueConstraints = {@UniqueConstraint(columnNames = {"users_id", "projects_id"})})
    @Fetch(FetchMode.JOIN)
    private Set<User> users;
}
