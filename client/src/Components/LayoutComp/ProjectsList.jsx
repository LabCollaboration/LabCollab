import React from "react";
// import RestauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../ProjectCard";
// import Loading from "../Loading";

const QUANTITY = 6;

export default function ProjectsList() {
  const [projects, setProjects] = useState([
    {
      project_id: "3",
      project_name: "NOAA NWS SKYWARN® Weather Spotter Program",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/3/",
      project_url_external: "http://www.nws.noaa.gov/skywarn/",
      project_description:
        "SKYWARN® is a National Weather Service (NWS) program developed in the 1960s that consists of trained weather spotters who provide reports of severe and hazardous weather to help meteorologists and emergency managers make life-saving warning decisions. There are well over 300,000 active SKYWARN Weather Spotters in the U.S. Spotters are concerned citizens, amateur radio operators, truck drivers, mariners, airplane pilots, emergency management personnel, and public safety officials who volunteer their time and energy to report on hazardous weather impacting their community. The first steps in becoming an official NWS SKYWARN Weather Spotter is to complete training on weather hazards and their reporting in your area. Classroom type training is typically offered each Spring and Fall. To find the next available training provided by your local NWS forecast office please visit this interactive map: http://www.nws.noaa.gov/skywarn/skywarn.htm In partnership with the COMET® Program, which is part of the University Corporation for Atmospheric Research&#39;s Community Programs supplemental national web-based training was also created. For more information please visit: https://www.meted.ucar.edu/training_course.php?id=23",
      keywords:
        "Skywarn, weather, spotter, flood, tornado, thunderstorm. hurricane, typhoon, snow, ice, wind, damage, storm, NOAA, NWS, training, meteorology",
      fields_of_science: "Climate and weather",
      project_status: "active",
      agency_sponsor: "National Oceanic and Atmospheric Administration (NOAA)",
      agency_sponsor_other: "",
      geographic_scope: "National",
      participant_age: "families, general_public, seniors, teens",
      project_goals: "",
      participation_tasks:
        "audio_video_recording, identification, learning, measurement, observation, photography",
      scistarter: "true",
      email: "ron.gird@noaa.gov",
      start_date: "1965",
    },
    {
      project_id: "4",
      project_name: "Florida Keys Water Watch",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/4/",
      project_url_external:
        "http://monroe.ifas.ufl.edu/pdf/environment/fkww.pdf",
      project_description:
        "The University of Florida IFAS Monroe County Extension developed Florida Keys Water Watch, a community-based volunteer water quality monitoring program to promote awareness of the importance of water quality, reduce nonpoint source pollution, and involve students and citizens to monitor coastal habitats from man-made canals to bays to  beaches.  Florida Keys Water Watch teaches volunteers to test a site of their choice for dissolved oxygen, pH, salinity and temperature after attending a 4-hour workshop.",
      keywords:
        "water quality, dissolved oxygen, pH, salinity, Florida Keys, South Florida, coastal",
      fields_of_science:
        "Chemistry,  Ecology and environment,  Nature and outdoors, Ocean/water and marine",
      project_status: "active",
      agency_sponsor: "U.S. Environmental Protection Agency (EPA)",
      agency_sponsor_other: "",
      geographic_scope: "Florida",
      participant_age:
        "elementary_school_children, families, general_public, seniors",
      project_goals: "",
      participation_tasks:
        "data_entry, identification, learning, measurement, observation, sample_analysis, site_selection_description, specimen_sample_collection",
      scistarter: "true",
      email: "shellykrueger@ufl.edu",
      start_date: "2014-10-17",
    },
    {
      project_id: "6",
      project_name: "System for Mapping and Predicting Species of Concern",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/6/",
      project_url_external: "http://www.dri.edu/",
      project_description:
        "The purpose of SMAP-SOC is to provide BLM natural resource managers with an application to model the current and future distributions of freshwater species of concern (SOC), across large management regions. These models will be based on occurrences from both crowdsourced data and detections using environmental DNA (e-DNA). These occurrences will then be related to Earth observations and other spatial data so distributions can be predicted across landscapes.",
      keywords:
        "freshwater, fish, Alaska, rivers, lakes, threatened and endangered",
      fields_of_science:
        "Animals, Ecology and environment,  Nature and outdoors",
      project_status: "active",
      agency_sponsor:
        "National Aeronautics and Space Administration (NASA), Bureau of Land Management (BLM) ",
      agency_sponsor_other: "",
      geographic_scope: "Alaska",
      participant_age: "general_public",
      project_goals: "",
      participation_tasks: "geolocation, specimen_sample_collection",
      scistarter: "true",
      email: "john.olson@dri.edu",
      start_date: "2014-02-14",
    },
    {
      project_id: "7",
      project_name: "Disk Detective",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/7/",
      project_url_external: "http://diskdetective.org",
      project_description:
        "NASA astrophysicists need your help finding new planetary systems. At Disk Detective, you&#39;ll view 10-second videos of images from NASA telescopes and help us decide if they might be stars with dusty disks where planets form and dwell.  The best candidates you find get followed-up with other telescopes so we can learn more about how planets are born.",
      keywords:
        "astronomy, NASA, extrasolar planets, online, planetary systems, Zooniverse",
      fields_of_science: "Astronomy and space",
      project_status: "active",
      agency_sponsor: "National Aeronautics and Space Administration (NASA)",
      agency_sponsor_other: "None",
      geographic_scope: "International",
      participant_age:
        "families, general_public, middle_school_children, seniors, teens",
      project_goals: "",
      participation_tasks: "classification_tagging, data_analysis",
      scistarter: "true",
      email: "Marc.Kuchner@nasa.gov",
      start_date: "2014-01-30",
    },
    {
      project_id: "10",
      project_name:
        "Use of early successional forests by birds during the post-fledging period",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/10/",
      project_url_external:
        "https://www.nrs.fs.fed.us/sustaining_forests/conserve_enhance/wildlife_fish/bird_habitat_improvement/",
      project_description:
        "Populations of many migratory birds that require large tracts of mature forest to nest are declining across the eastern states, despite the fact that our forests are maturing and in many states are stable or increasing in area. birds provide vital ecological functions in forests, including pest control and seed dispersal, so continued declines in bird populations may negatively affect forest health and regeneration. Reversing these declines requires an understanding of the habitat needs of forest birds throughout their life cycle. This research focuses specifically on the 1-2 month period between nesting and migration, a period of the life cycle which isn&#39;t well studied. This is a formal study which involves a dedicated group of citizen scientists. there is also an associated outreach and education program, which is held through the Jamestown, NY Audubon Society for five Saturdays every spring, beginning the last Saturday in April. I am combining these two projects for the purpose of this database. The larger outreach and education project allows more informal opportunities for citizen science, and data collected through that effort is still entered in the (North American) Bird Point Count Database for scientific use.",
      keywords:
        "clearcut, early-successional habitat, habitat choice, mature-forest birds, postbreeding period",
      fields_of_science: "Birds",
      project_status: "active",
      agency_sponsor:
        "U.S. Forest Service (USFS), U.S. Department of Agriculture",
      agency_sponsor_other: "",
      geographic_scope: "Regional",
      participant_age:
        "elementary_school_children, families, general_public, middle_school_children, seniors, teens",
      project_goals: "",
      participation_tasks:
        "data_analysis, data_entry, identification, learning, measurement, observation, photography",
      scistarter: "false",
      email: "sstoleson@fs.fed.us",
      start_date: "2004-07-15",
    },
    {
      project_id: "12",
      project_name: "The National Map Corps",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/12/",
      project_url_external: "http://nationalmap.gov/TheNationalMapCorps/",
      project_description:
        "The National Map Corps enlists volunteers to collect and edit data about human made structures in an effort to provide accurate and authoritative map data for the USGS National Map and US Topo Maps. Using aerial imagery and base layers from The National Map, volunteers are editing 10 different structure types including schools, hospitals, post offices, police stations, and other important public buildings in all 50 States as well as Puerto Rico and the US Virgin Islands.",
      keywords:
        "Cartography, Geography, Mapping, Structures, Crowdmapping, Volunteered Geographic Information (VGI), Cartography, GIS",
      fields_of_science:
        "Computers and technology,  Disaster response,  Geology and earth science,  Geography",
      project_status: "active",
      agency_sponsor: "U.S. Geological Survey (USGS)",
      agency_sponsor_other: "volunteer.gov",
      geographic_scope: "National",
      participant_age:
        "families, middle_school_children, general_public, teens",
      project_goals: "",
      participation_tasks:
        "annotation, classification_tagging, data_entry, finding_entities, geolocation, identification",
      scistarter: "true",
      email: "ekorris@usgs.gov",
      start_date: "1994",
    },
    {
      project_id: "13",
      project_name:
        "The Advanced Rapid Imaging and Analysis Project (ARIA) Damage Validation Project",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/13/",
      project_url_external: "http://aria.jpl.nasa.gov/",
      project_description:
        "The Advanced Rapid Imaging and Analysis Project at NASA&#39;s Jet Propulsion Laboratory and the California Institute of Technology develops algorithms and a system to automatically respond to natural disaster events and rapidly produce decision support information, using Synthetic Aperture Radar (SAR), Global Positioning System (GPS), and seismic data.  The ARIA Damage Validation Project combines change detection maps derived from SAR data and optical data using human brains through a mobile-friendly web interface. The crowdsourcing produces improved versions of damage detection maps decreasing the number of false positives.",
      keywords:
        "Proof of concept, disaster_response, damage maps, natural disaster, remote sensing, Synthetic Aperture Radar",
      fields_of_science:
        "Astronomy and space, Climate and weather,  Computers and technology,  Ecology and environment,  Geology and earth science,  Ocean/water and marine, Science policy",
      project_status: "active",
      agency_sponsor: "U.S. Geological Survey (USGS)",
      agency_sponsor_other: "FEMA, NASA Jet Propulsion Laboratory",
      geographic_scope: "International",
      participant_age: "general_public",
      project_goals: "",
      participation_tasks:
        "data_entry, geolocation, classification_tagging, finding_entities, ",
      scistarter: "true",
      email: "Sang-Ho.Yun@jpl.nasa.gov",
      start_date: "2013-10-01",
    },
    {
      project_id: "14",
      project_name: "Did You Feel It?",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/14/",
      project_url_external: "http://earthquake.usgs.gov/dyfi",
      project_description:
        "The Did You Feel It? (DYFI) project is designed to gather information available about earthquakes from the people who experience them. By tapping the immense number of users online, DYFI can get a detailed characterization of what people were experiencing, the impacts of the earthquake, and the amount of damage it incurred, beyond the scope traditional information gathering techniques. Data input from users is immediately available on the website, and its interactive platform encourages users to gain a deeper understanding of earth sciences while they participate.",
      keywords: "Earthquakes, Natural hazards",
      fields_of_science: "Geology and earth science,  Disaster response",
      project_status: "active",
      agency_sponsor: "U.S. Geological Survey (USGS)",
      agency_sponsor_other: "",
      geographic_scope: "International",
      participant_age: "general_public, targeted_group",
      project_goals: "",
      participation_tasks:
        "observation, site_selection_description, classification_tagging, data_entry, geolocation, identification",
      scistarter: "true",
      email: "wald@usgs.gov",
      start_date: "2003",
    },
    {
      project_id: "16",
      project_name: "The Delaware Bay Horseshoe Crab Survey",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/16/",
      project_url_external: "http://horseshoecrabsurvey.com",
      project_description:
        "The Delaware Bay Horseshoe Crab Survey was founded in 1990, and received government support beginning in 1999. Volunteers collect data on Horseshoe crabs through beach surveys, providing critical information for scientists and policymakers about Horseshoe crab populations in the Delaware Bay. Data from the survey has helped the Atlantic States Marine Fisheries Commission (ASMFC) set protocols for commercial fishing. Limuli Labs, a company that relies on horseshoe crabs to support medical research and practice, provides funding for the project website.",
      keywords:
        "Environmental Survey, Conservation Policy, Biodiversity, ecosystem ecology, human pharmacology",
      fields_of_science:
        "Animals, Biology, Ecology and environment,  Health and medicine,  Nature and outdoors, Ocean/water and marine, Science policy",
      project_status: "active",
      agency_sponsor:
        "National Oceanic and Atmospheric Administration (NOAA), U.S. Geological Survey (USGS), U.S. Fish and Wildlife Service",
      agency_sponsor_other: "",
      geographic_scope:
        "Regional (13 beaches in Delaware and 12 beaches in New Jersey)",
      participant_age:
        "general_public, families, middle_school_children, teens",
      project_goals: "",
      participation_tasks:
        "data_entry, observation, measurement, learning, site_selection_description",
      scistarter: "true",
      email: "bhall@udel.edu",
      start_date: "1990",
    },
    {
      project_id: "17",
      project_name: "Local Environmental Observer Network",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/17/",
      project_url_external: "http://www.leonetwork.org",
      project_description:
        "The Local Environmental Observer Network is a project that applies traditional knowledge along side western science and technology in order to document change due to climate change, development and progress. Observations include: unusual plants and wildlife, extreme weather, erosion, flooding, droughts, wildfire and other events that can threaten food security, water security and community health. The goal is to gain better understanding about how communities are changing, to identify emerging threats, and to connect community members with topic experts who can provide assistance. The project utilizes observation reports and web-based maps to publish findings. LEO Network is based at the Center for Climate and Health at the Alaska Native Tribal Health Consortium. It receives funding support from the U.S. Environmental Protection Agency.",
      keywords:
        "Community, Maps, Climate Change, One Health, Health Impacts, Native American, Environmental Awareness, Citizen Science",
      fields_of_science:
        "Animals, Biology, Climate and weather,  Computers and technology,  Ecology and environment,  Education, Food,  Geology and earth science,  Health and medicine,  Nature and outdoors, Science policy",
      project_status: "active",
      agency_sponsor: "U.S. Environmental Protection Agency (EPA)",
      agency_sponsor_other: "Commission for Environmental Cooperation (CEC)",
      geographic_scope:
        "Alaska, Western Canada, Northern California, Mexico, Greenland",
      participant_age:
        "families, middle_school_children, general_public, seniors, teens",
      project_goals: "",
      participation_tasks: "observation, photography, geolocation",
      scistarter: "false",
      email: "mbrubaker@anthc.org",
      start_date: "2012-01",
    },
    {
      project_id: "18",
      project_name: "Indigenous Observation Network (ION)",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/18/",
      project_url_external: "http://yukon.fieldscope.org/",
      project_description:
        "The Indigenous Observation Network (ION) is a collaborative research and monitoring project to preserve and protect the Yukon River for future generations and the continuation of a traditional Native way of life. Since 2006, the USGS National Research Program and Yukon River Inter-Tribal Watershed Council (YRITWC) have been partnering to collect water-quality samples from the Yukon River and tributaries with the assistance of trained Indigenous citizens living in the Yukon River Basin. Through this partnership over 300 Indigenous citizens have been trained in water sample collection, which has resulted in over 1500 samples collected at more than 54 sites covering the entire 2,300 mile reach of the Yukon River since the program began. In addition to water-quality monitoring a permafrost monitoring project began in 2009 called the Active Layer Network. This project measures the thickness of the active layer on an annual basis and collects air and soil temperature readings as well as soil moisture measurements at 20 locations across the Yukon River Basin and Alaska and Canada. Note: Volunteers must be trusted local citizens that are recommended by Tribal Councils, Newsletter, YRITWC outreach.",
      keywords:
        "Alaska, Climate Change, Active Layer, Permafrost,  Biogeochemistry, Water Quality, Indigenous Knowledge, Monitoring, Yukon River, Traditional Ecological Knowledge (TEK)",
      fields_of_science:
        "Chemistry,  Climate and weather,  Ecology and environment",
      project_status: "active",
      agency_sponsor:
        "National Science Foundation (NSF), U.S. Environmental Protection Agency (EPA), U.S. Geological Survey (USGS)",
      agency_sponsor_other: "Administration of Native American",
      geographic_scope: "International and regional (Yukon River Basin)",
      participant_age:
        "general_public, elementary_school_children, middle_school_children, teens, targeted_group",
      project_goals: "",
      participation_tasks:
        "audio_video_recording, data_analysis, data_entry, measurement, observation, site_selection_description, specimen_sample_collection",
      scistarter: "false",
      email: "emutter@yritwc.org",
      start_date: "2006",
    },
    {
      project_id: "19",
      project_name: "Is Ash Falling?",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/19/",
      project_url_external: "http://www.avo.alaska.edu/ashfall/ashreport.php",
      project_description:
        "Is Ash Falling? project is a database module and web interface allowing the public and Alaska Volcano Observatory (AVO) staff to enter reports of ashfall in their local area in real time and retrospectively following an eruptive event. Users browsing the AVO website during eruptions will be directed towards a web form allowing them to fill in ashfall information and submit the information to AVO. The ashfall report database will help AVO track eruption clouds and associated fallout downwind. These reports from the public will also give scientists a more complete record of the amount and duration and other conditions of ash fall. First-hand accounts of ashfall will support ashfall model development and interpretation of satellite imagery and will improve ashfall warning messages. The online form will also free up resources during exceedingly busy times during an eruption, as most individuals currently phone AVO with their reports.",
      keywords: "volcanic ash, ashfall, volcanoes",
      fields_of_science:
        "Geology and earth science,  Nature and outdoors, Disaster response",
      project_status: "active",
      agency_sponsor: "U.S. Geological Survey (USGS)",
      agency_sponsor_other: "",
      geographic_scope: "Regional",
      participant_age: "general_public, targeted_group",
      project_goals: "",
      participation_tasks:
        "observation, identification, measurement, data_entry, site_selection_description, classification_tagging, geolocation,specimen_sample_collection, learning",
      scistarter: "true",
      email: "kwallace@usgs.gov",
      start_date: "2013-05-10",
    },
    {
      project_id: "20",
      project_name: "Image Detective",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/20/",
      project_url_external:
        "http://eol.jsc.nasa.gov/BeyondThephotography/ImageDetective/",
      project_description:
        "Use your geography skills to geolocate Astronaut photography of Earth!  If you have always wanted to associate those amazing photographs of our beautiful planet taken from space with their locations on the Earth, Image Detective is the perfect tool for you!  By doing so, you will help to locate hundreds of thousands of images and also enhance your geography skills at the same time. You can gauge how high your skill level is by accumulating points as you submit each image, then checking out the Who Has High Score? icon on the front page.",
      keywords:
        "Astronaut photography, imagery, ISS, International Space Station, Space Shuttle, earth science, remote sensing, Geography,  center point",
      fields_of_science: "Education, Geology and earth science",
      project_status: "active",
      agency_sponsor: "National Aeronautics and Space Administration (NASA)",
      agency_sponsor_other: "",
      geographic_scope: "International",
      participant_age:
        "elementary_school_children, families, general_public, middle_school_children, seniors, teens",
      project_goals: "",
      participation_tasks:
        "annotation, classification_tagging, data_analysis, data_entry, finding_entities, geolocation, identification, learning",
      scistarter: "true",
      email: "jsc-earthweb@mail.nasa.gov",
      start_date: "2012-05-01",
    },
    {
      project_id: "21",
      project_name: "Florida Microplastic Awareness Project",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/21/",
      project_url_external: "http://www.plasticaware.org",
      project_description:
        "Citizen scientists are collecting coastal water samples and filtering them to look for the presence of microplastics (using a microscope). They are also helping to educate stakeholders about the sources of and problems caused by microplastics in order to encourage people to read labels to avoid purchasing plastics when non-plastic alternatives are available, and to recycle/reuse as much as possible.",
      keywords: "microplastic, marine, water,",
      fields_of_science:
        "Ecology and environment,  Nature and outdoors, Ocean/water and marine",
      project_status: "active",
      agency_sponsor: "National Oceanic and Atmospheric Administration (NOAA)",
      agency_sponsor_other: "",
      geographic_scope: "Local",
      participant_age: "general_public, middle_school_children, seniors, teens",
      project_goals: "",
      participation_tasks:
        "data_entry, observation, other, sample_analysis, specimen_sample_collection",
      scistarter: "true",
      email: "mpmcg@ufl.edu",
      start_date: "2015-09-01",
    },
    {
      project_id: "22",
      project_name: "Student Watershed Research Project",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/22/",
      project_url_external:
        "https://capstone.unst.pdx.edu/partners/student-watershed-research-project-swrp",
      project_description:
        "The Student Watershed Research Project involves high school students in the collection of stream monitoring data such as water quality samples, biological data, and physical observations. Monitoring occurs mostly near the Portland, Oregon metro area but is also scattered throughout Oregon and southwest Washington.",
      keywords: "Biology, Stream monitoring, Water quality",
      fields_of_science:
        "Biology, Ecology and environment,  Education, Nature and outdoors, Ocean/water and marine",
      project_status: "active",
      agency_sponsor:
        "National Science Foundation (NSF), U.S. Geological Survey (USGS)",
      agency_sponsor_other: "",
      geographic_scope: "Regional (Portland, Oregon area)",
      participant_age: "teens",
      project_goals: "",
      participation_tasks:
        "learning, measurement, observation, sample_analysis, data_analysis, specimen_sample_collection, site_selection_description, classification_tagging, finding_entities, geolocation, audio_video_recording",
      scistarter: "false",
      email: "sarounds@usgs.gov",
      start_date: "1991",
    },
    {
      project_id: "26",
      project_name: "Cyclone Center",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/26/",
      project_url_external: "http://www.cyclonecenter.org/",
      project_description:
        "The climatology of tropical cyclones is limited by uncertainties in the historical record. Patterns in storms imagery are best recognized by the human eye, so we need your help analyzing these storms.",
      keywords:
        "hurricane, tropical, cyclone, climate, weather, storms, clouds, satellite",
      fields_of_science: "Climate and weather",
      project_status: "active",
      agency_sponsor: "National Oceanic and Atmospheric Administration (NOAA)",
      agency_sponsor_other: "",
      geographic_scope: "International",
      participant_age: "general_public",
      project_goals: "",
      participation_tasks:
        "classification_tagging, identification, observation",
      scistarter: "true",
      email: "Ken.Knapp@noaa.gov",
      start_date: "2012-09-25",
    },
    {
      project_id: "27",
      project_name: "Nature’s Notebook",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/27/",
      project_url_external: "https://www.usanpn.org/natures_notebook",
      project_description:
        "Nature&#39;s Notebook gathers information on plant and animal phenology across the U.S. to be used for decision-making on local, national and global scales to ensure the continued vitality of our environment. Scientists alone cannot collect enough data: They need your help. Join more than 6,000 other amateur naturalists across the nation in taking the pulse of our planet. Volunteers use scientifically-vetted observation guidelines, developed for over 1,000 species, to ensure data are useful to researchers and decision-makers.",
      keywords: "Animals, Biology, Ecology, Phenology, Plants",
      fields_of_science:
        "Animals, Biology, Climate and weather,  Ecology and environment,  Nature and outdoors",
      project_status: "active",
      agency_sponsor:
        "U.S. Geological Survey (USGS), National Science Foundation (NSF), National Park Service (NPS), National Oceanic and Atmospheric Administration (NOAA)",
      agency_sponsor_other:
        "NASA, US Fish and Wildlife Service, Oak ridge National Laboratory (Funded by Department of Energy)",
      geographic_scope: "National (open to World, but focus is on US)",
      participant_age:
        "general_public, elementary_school_children, middle_school_children, teens, families",
      project_goals: "",
      participation_tasks:
        "site_selection, geolocation, observation, sample_analysis, data_entry, classification_tagging, finding_entities, measurement, site_selection_description, learning",
      scistarter: "true",
      email: "theresa@usanpn.org",
      start_date: "2007-01-01",
    },
    {
      project_id: "28",
      project_name: "Shoreline Debris Monitoring",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/28/",
      project_url_external:
        "http://olympiccoast.noaa.gov/protect/marinedebris/marinedebris.html",
      project_description:
        "Olympic Coast National Marine Sanctuary (OCNMS), funded by a grant from NOAA’s Marine Debris Program, initiated shoreline debris monitoring in 2012 following NOAA’s Marine Debris Shoreline Survey Field Guide methods published in 2012.  OCNMS volunteers originally initiated shoreline debris monitoring in 2001 using data categories standardized by the U.S. Environmental Protection Agency and Ocean Conservancy.  Heightened interest in shoreline debris data associated with concerns about materials originating from the March 2011 Japan tsunami coincided with release of the new NOAA methods, which prompted significant modification of OCNMS’ shoreline debris monitoring program.  Shoreline debris data will be used to document temporal, spatial, and composition patterns in debris deposition on Washington’s coastline, and to the extent possible to identify changes in debris types and volumes associated with the March 2011 tsunami debris.  In 2012, new shoreline debris monitoring methods were initiated at 6 sites on the outer coast of Washington state.  By 2014 there were nine coast sites and seven sites on the Strait of Juan de Fuca.  The goal for FY 2015 is to continue this monitoring effort and expand the effort to teachers and their students within walking distance of coast sites.",
      keywords: "marine debris, survey, beaches, coast,",
      fields_of_science:
        "Biology, Ecology and environment,  Nature and outdoors, Ocean/water and marine",
      project_status: "active",
      agency_sponsor: "National Oceanic and Atmospheric Administration (NOAA)",
      agency_sponsor_other: "Olympic Coast National Marine Sanctuary",
      geographic_scope: "Local",
      participant_age: "families, general_public, seniors, teens",
      project_goals: "",
      participation_tasks:
        "classification_tagging, identification, learning, measurement, observation, photography",
      scistarter: "true",
      email: "Heidi.Pedersen@noaa.gov",
      start_date: "2012",
    },
    {
      project_id: "29",
      project_name:
        "EcoCast: Improving Ecological and Economic Sustainability of Marine Fisheries Using Remotely-sensed Oceanographic Data",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/29/",
      project_url_external: "",
      project_description:
        "Balancing sustainable ecological and economic objectives is a continuing challenge for fisheries managers. Many US fisheries harvest healthy target stocks, however, bycatch of non-target species is common, and can result in large-scale fishery closures. Technological advancements in remote sensing over the past decade have revolutionized the way fishermen target ocean resources and the amount of data available on the ocean environment. In partnership with the California drift gillnet fishery and National Marine Fisheries Service, we aim to use these data to balance protection of ecological resources and economic viability. The objective of this Feasibility Study Project is to evaluate the applicability of EcoCatch, a near real-time, multi-species fisheries management tool. Our approach will build on previous NASA-funded projects, TurtleWatch and WhaleWatch, that couple spatial data of protected species with remotely-sensed data to successfully reduce bycatch and other human impacts. We will use remotely sensed satellite oceanographic, fisheries and satellite tracking data to produce near-real time spatial models of target catch and bycatch, assimilating additional information from fishermen input. Our objective is to develop a predictive tool that will enhance conservation of protected and non-target species, while maintaining sustainability and profitability of the fishery.",
      keywords:
        "fisheries, remotely sensed, oceanographic, bycatch, model, tool",
      fields_of_science: "Animals, Ecology and environment,  Science policy",
      project_status: "complete",
      agency_sponsor: "National Oceanic and Atmospheric Administration (NOAA)",
      agency_sponsor_other: "",
      geographic_scope: "Regional",
      participant_age: "",
      project_goals: "",
      participation_tasks:
        "data_entry, geolocation, observation, identification, measurement",
      scistarter: "false",
      email: "rlewison@mail.sdsu.edu",
      start_date: "2013-12-19",
    },
    {
      project_id: "30",
      project_name: "Forecasting Harmful Algal Blooms in California",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/30/",
      project_url_external: "https://calhabmap.org/hab-forecast",
      project_description:
        "This project involves development of California HAB forecasting application to inform when and where toxic blooms of algae occur to better inform management decisions. The project generates nowcast and forecast products routinely and in a pre-transitional demonstration of operational predictions of toxigenic blooms and domoic acid toxins along the central California coast by merging: 1) ecological/statistical models to 2) existing hydrodynamic model simulations (ROMS), 3) enhanced satellite imagery (MODIS-Aqua with DINEOF), 4) and community (Cal-HABMAP)/crowdsourced (JellyWatch and Marine Mammal Center) observations. Highly reliable data on marine mammal strandings from domoic acid (DA) toxicosis are provided by the Marine Mammal Center (TMMC) and serve as an important source of matchups for broad geographic attribution of the DA events. These near real-time validation data are provided by our collaboration with the JellyWatch and TempBreak communities to populate crowdsourced observations with marine mammal stranding data that serve as a proxy for offshore DA events. A close partnership has been established with NOAA’s National Ocean Service (NOS) and the National Weather Service (NWS) to test the new data product in an environment suited towards serving as the operational center.",
      keywords:
        "Harmful algal blooms, Pseudo-nitzschia, domoic acid, ecological forecasting, red tides, crowdsourcing",
      fields_of_science:
        "Ocean/water and marine, Ecology and environment,  Health and medicine,  Biology, Animals, Nature and outdoors",
      project_status: "complete",
      agency_sponsor:
        "National Aeronautics and Space Administration (NASA), National Oceanic and Atmospheric Administration (NOAA)",
      agency_sponsor_other: "",
      geographic_scope: "Regional",
      participant_age: "",
      project_goals: "",
      participation_tasks: "finding_entities, geolocation, observation",
      scistarter: "true",
      email: "clrander@ucsc.edu",
      start_date: "2013-12-31",
    },
    {
      project_id: "31",
      project_name: "Smithsonian Transcription Center",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/31/",
      project_url_external: "https://transcription.si.edu",
      project_description:
        "The Smithsonian Transcription Center engages the public in making our priceless collections more accessible.  We work hand-in-hand with Digital Volunteers to transcribe historic documents and collection records to facilitate research and excite learning in audiences everywhere.  Participants have the chance to transcribe a diverse array of collection materials drawn from Smithsonian holdings in science, history, art, and culture.",
      keywords:
        "transcription, science, art, history, cultural heritage, collection, archive, library, biodiversity, handwritten, records",
      fields_of_science:
        "Animals, Archeology and cultural, Astronomy and space, Biology, Birds,  Pollinators/insects, Nature and outdoors",
      project_status: "active",
      agency_sponsor: "Smithsonian Institution (SI)",
      agency_sponsor_other: "",
      geographic_scope: "World",
      participant_age: "families, general_public, seniors, teens",
      project_goals: "",
      participation_tasks:
        "annotation, classification_tagging, data_entry, finding_entities, identification, learning, problem_solving, transcription",
      scistarter: "true",
      email: "almeidaa@si.edu",
      start_date: "2013-06-15",
    },
    {
      project_id: "32",
      project_name: "Marine Debris Monitoring and Assessment Project (MDMAP)",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/32/",
      project_url_external:
        "http://marinedebris.noaa.gov/research/marine-debris-monitoring-and-assessment-project",
      project_description:
        "Partner organizations and volunteers conduct shoreline monitoring according to the published NOAA Marine Debris Monitoring and Assessment Project survey techniques. Survey data that is uploaded to the MDMAP database contributes to our understanding of the distribution, types, and abundance of debris in the marine environment, in order to guide policy development, education and outreach, and research initiatives.",
      keywords:
        "marine debris, marine litter, shoreline monitoring, beach monitoring",
      fields_of_science: "Ocean/water and marine",
      project_status: "active",
      agency_sponsor: "National Oceanic and Atmospheric Administration (NOAA)",
      agency_sponsor_other: "",
      geographic_scope: "International",
      participant_age: "families, general_public, seniors, teens",
      project_goals: "",
      participation_tasks:
        "classification_tagging, data_entry, geolocation, identification, learning, measurement, observation, site_selection_description",
      scistarter: "true",
      email: "sherry.lippiatt@noaa.gov",
      start_date: "2012-01-01",
    },
    {
      project_id: "34",
      project_name: "IHO Crowd Source Bathymetry Pilot Project",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/34/",
      project_url_external: "http://www.ngdc.noaa.gov/iho/#csb",
      project_description:
        "The International Hydrographic Office (IHO) is coordinating a Crowd-Sourced Bathymetry (CSB) data gathering proof of concept project with SeaID, the Professional Yachting Association (PYA) and the IHO Data Center for Digital Bathymetry (IHO DCDB). SeaID is developing and installing data loggers on 12 super yachts that will collect reliable xyz data from standard digital echo sounders and GNSS receivers. The data is being assembled and sent to the IHO DCDB hosted at NOAA&#39;s National Centers for Environmental Information in Boulder, Colorado, where it will be made available to the public via an interactive web map service.  This data pathway is currently being developed so that automated data input (and data exports) into standard database is established.The ultimate objective of this CSB project is to make it easy for every trusted mariner to contribute to the global IHO DCDB bathymetric database and to make this data readily accessible for a range of uses, including nautical charting and global digital datasets such as the General Bathymetric Chart of the Oceans (GEBCO).",
      keywords:
        "crowd source, bathymetry, echo sounders, web map services, nautical charting, GEBCO",
      fields_of_science: "Geology and earth science,  Ocean/water and marine",
      project_status: "active",
      agency_sponsor: "National Oceanic and Atmospheric Administration (NOAA)",
      agency_sponsor_other: "",
      geographic_scope: "International",
      participant_age: "general_public",
      project_goals: "",
      participation_tasks: "measurement",
      scistarter: "false",
      email: "jennifer.jencks@noaa.gov",
      start_date: "2014-10-10",
    },
    {
      project_id: "35",
      project_name: "Georgia Adopt-a-Stream",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/35/",
      project_url_external: "http://www.georgiaadoptastream.com",
      project_description:
        "Georgia&#39;s Environmental Protection Division has 4 programs engaging citizens in watershed work and education:  Rivers Alive, Adopt-A-Stream, Project WET and River of Words.  The Adopt-A-Stream program organizes and provides resources to trainers, volunteer citizen scientists and state organizations helping them perform water quality monitoring around the state.",
      keywords:
        "watershed, water quality, monitoring, public awareness, data, observations, tools & training, nonpoint source pollution",
      fields_of_science:
        "Animals, Biology, Chemistry,  Climate and weather,  Computers and technology,  Disaster response,  Ecology and environment,  Education, Geology and earth science,  Pollinators/insects, Ocean/water and marine, Physics, Science policy",
      project_status: "active",
      agency_sponsor: "U.S. Environmental Protection Agency (EPA)",
      agency_sponsor_other: "",
      geographic_scope: "Georgia",
      participant_age:
        "families, general_public, middle_school_children, teens",
      project_goals: "",
      participation_tasks:
        "data_entry, geolocation, identification, learning, measurement, observation, photography, site_selection_description",
      scistarter: "true",
      email: "Harold.Harbert@gaepd.org",
      start_date: "On-going",
    },
  ]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   fetch(
  //     `http://localhost:8080/restaurant/getSome/${
  //       projects.length / QUANTITY
  //     }/${QUANTITY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.length < QUANTITY) {
  //         setHasMore(false);
  //       }
  //       setProjects([...projects, ...data]);
  //     });
  // }, [page]);

  return (
    <div className=" z-10 min-h-screen bg-gray-700 flex justify-center items-center py-20">
      <InfiniteScroll
        className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0"
        dataLength={projects.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore} // Replace with a condition based on your data source
        // loader={<Loading />}
        endMessage={<p>No more data to load.</p>}
      >
        {projects.map((project, index) => (
          
          <ProductCard key={index} project={project} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
