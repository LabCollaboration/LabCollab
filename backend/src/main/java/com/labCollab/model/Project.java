package com.labCollab.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue
    private Long id;

    private String project_name;
    @Column(length = 1000)
    private String project_url_on_catalog;
    @Column(length = 1000)
    private String project_url_external;
    @Column(length = 3000)
    private String project_description;

    @JsonManagedReference
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<ProjectFilter> projectFilters;

    @Column(length = 1000)
    private String fields_of_science;
    @Column(length = 1000)
    private String project_status;
    @Column(length = 1000)
    private String agency_sponsor;
    @Column(length = 1000)
    private String agency_sponsor_other;
    @Column(length = 1000)
    private String geographic_scope;
    @Column(length = 1000)
    private String participant_age;
    @Column(length = 1000)
    private String project_goals;
    @Column(length = 1000)
    private String participation_tasks;
    @Column(length = 1000)
    private String scistarter;
    private String email;
    private String start_date;

    @JsonBackReference
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<UserProject> userProjects;
}
