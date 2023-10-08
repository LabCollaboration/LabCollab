package com.labCollab.repository;

import com.labCollab.model.UserFilter;
import com.labCollab.model.UserProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProjectRepository extends JpaRepository<UserProject, Long> {
}