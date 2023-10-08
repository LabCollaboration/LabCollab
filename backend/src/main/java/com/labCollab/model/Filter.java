package com.labCollab.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name = "filters")
public class Filter {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @JsonBackReference
    @OneToMany(mappedBy = "filter", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProjectFilter> projectFilters;

    @JsonBackReference
    @OneToMany(mappedBy = "filter", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<UserFilter> userFilters;
}
