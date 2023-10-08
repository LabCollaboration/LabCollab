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
@Table(name="filters")
public class Filter {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Project.class)
    @JoinTable(name = "filters_projects",
            joinColumns = @JoinColumn(name = "filters_id"),
            inverseJoinColumns = @JoinColumn(name = "projects_id"),
            uniqueConstraints = {@UniqueConstraint(columnNames = {"filters_id", "projects_id"})})
//    @Fetch(FetchMode.JOIN)
    private Set<Project> projects;

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = User.class)
    @JoinTable(name = "filters_users",
            joinColumns = @JoinColumn(name = "filters_id"),
            inverseJoinColumns = @JoinColumn(name = "users_id"),
            uniqueConstraints = {@UniqueConstraint(columnNames = {"filters_id", "users_id"})})
    @Fetch(FetchMode.JOIN)
    private Set<User> userSet;
}
