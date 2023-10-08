package com.labCollab.repository;

import com.labCollab.model.Filter;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.function.Function;

@Repository
public interface FilterRepository extends JpaRepository<Filter, Long> {
   Optional<Filter> findByName(String name);
}
