package com.labCollab.repository;

import com.labCollab.model.ProjectFilter;
import com.labCollab.model.UserFilter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserFilterRepository extends JpaRepository<UserFilter, Long> {
}