package com.labCollab.service;

import com.labCollab.model.Filter;
import com.labCollab.repository.FilterRepository;
import com.labCollab.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FilterService {
    private final FilterRepository filterRepository;
    private final ProjectRepository projectRepository;

    public void add(Filter filter){
        filterRepository.save(filter);
    }


    public List<Filter> getFilters(){
        return filterRepository.findAll();
    }

}
