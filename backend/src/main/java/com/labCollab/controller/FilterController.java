package com.labCollab.controller;

import com.labCollab.model.Filter;
import com.labCollab.service.FilterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/filters")
@RequiredArgsConstructor
public class FilterController {
    private final FilterService filterService;

    @GetMapping("/all")
    @CrossOrigin("*")
    public ResponseEntity<List<Filter>> getAll() {
        return ResponseEntity.ok(filterService.getFilters());
    }

    @PostMapping("/add")
    @CrossOrigin("*")
    public void postFilter(@RequestBody Filter filter) {
        filterService.add(filter);
    }

}

