package com.labCollab.repository;

import com.labCollab.model.ProjectFilter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectFilterRepository extends JpaRepository<ProjectFilter, Long> {
}