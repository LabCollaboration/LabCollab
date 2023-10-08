package com.labCollab.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.List;

@Data
public class ProjectDAO {
    private String project_id;

    private String project_name;
    private String project_url_on_catalog;
    private String project_url_external;
    private String project_description;

    private String keywords;
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

}
