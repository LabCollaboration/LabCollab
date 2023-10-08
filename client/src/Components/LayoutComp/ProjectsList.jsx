import React from "react";
// import RestauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../ProjectCard";
import Loading from "../Loading";
// import Loading from "../Loading";

const QUANTITY = 3;

export default function ProjectsList({ filterString }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      project_name: "NOAA NWS SKYWARN® Weather Spotter Program",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/3/",
      project_url_external: "http://www.nws.noaa.gov/skywarn/",
      project_description:
        "SKYWARN® is a National Weather Service (NWS) program developed in the 1960s that consists of trained weather spotters who provide reports of severe and hazardous weather to help meteorologists and emergency managers make life-saving warning decisions. There are well over 300,000 active SKYWARN Weather Spotters in the U.S. Spotters are concerned citizens, amateur radio operators, truck drivers, mariners, airplane pilots, emergency management personnel, and public safety officials who volunteer their time and energy to report on hazardous weather impacting their community. The first steps in becoming an official NWS SKYWARN Weather Spotter is to complete training on weather hazards and their reporting in your area. Classroom type training is typically offered each Spring and Fall. To find the next available training provided by your local NWS forecast office please visit this interactive map: http://www.nws.noaa.gov/skywarn/skywarn.htm In partnership with the COMET® Program, which is part of the University Corporation for Atmospheric Research&#39;s Community Programs supplemental national web-based training was also created. For more information please visit: https://www.meted.ucar.edu/training_course.php?id=23",
      projectFilters: [],
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
      id: 2,
      project_name: "Florida Keys Water Watch",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/4/",
      project_url_external:
        "http://monroe.ifas.ufl.edu/pdf/environment/fkww.pdf",
      project_description:
        "The University of Florida IFAS Monroe County Extension developed Florida Keys Water Watch, a community-based volunteer water quality monitoring program to promote awareness of the importance of water quality, reduce nonpoint source pollution, and involve students and citizens to monitor coastal habitats from man-made canals to bays to  beaches.  Florida Keys Water Watch teaches volunteers to test a site of their choice for dissolved oxygen, pH, salinity and temperature after attending a 4-hour workshop.",
      projectFilters: [],
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
      id: 3,
      project_name: "System for Mapping and Predicting Species of Concern",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/6/",
      project_url_external: "http://www.dri.edu/",
      project_description:
        "The purpose of SMAP-SOC is to provide BLM natural resource managers with an application to model the current and future distributions of freshwater species of concern (SOC), across large management regions. These models will be based on occurrences from both crowdsourced data and detections using environmental DNA (e-DNA). These occurrences will then be related to Earth observations and other spatial data so distributions can be predicted across landscapes.",
      projectFilters: [],
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
      id: 4,
      project_name: "Disk Detective",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/7/",
      project_url_external: "http://diskdetective.org",
      project_description:
        "NASA astrophysicists need your help finding new planetary systems. At Disk Detective, you&#39;ll view 10-second videos of images from NASA telescopes and help us decide if they might be stars with dusty disks where planets form and dwell.  The best candidates you find get followed-up with other telescopes so we can learn more about how planets are born.",
      projectFilters: [],
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
      id: 5,
      project_name:
        "Use of early successional forests by birds during the post-fledging period",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/10/",
      project_url_external:
        "https://www.nrs.fs.fed.us/sustaining_forests/conserve_enhance/wildlife_fish/bird_habitat_improvement/",
      project_description:
        "Populations of many migratory birds that require large tracts of mature forest to nest are declining across the eastern states, despite the fact that our forests are maturing and in many states are stable or increasing in area. birds provide vital ecological functions in forests, including pest control and seed dispersal, so continued declines in bird populations may negatively affect forest health and regeneration. Reversing these declines requires an understanding of the habitat needs of forest birds throughout their life cycle. This research focuses specifically on the 1-2 month period between nesting and migration, a period of the life cycle which isn&#39;t well studied. This is a formal study which involves a dedicated group of citizen scientists. there is also an associated outreach and education program, which is held through the Jamestown, NY Audubon Society for five Saturdays every spring, beginning the last Saturday in April. I am combining these two projects for the purpose of this database. The larger outreach and education project allows more informal opportunities for citizen science, and data collected through that effort is still entered in the (North American) Bird Point Count Database for scientific use.",
      projectFilters: [],
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
      id: 6,
      project_name: "The National Map Corps",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/12/",
      project_url_external: "http://nationalmap.gov/TheNationalMapCorps/",
      project_description:
        "The National Map Corps enlists volunteers to collect and edit data about human made structures in an effort to provide accurate and authoritative map data for the USGS National Map and US Topo Maps. Using aerial imagery and base layers from The National Map, volunteers are editing 10 different structure types including schools, hospitals, post offices, police stations, and other important public buildings in all 50 States as well as Puerto Rico and the US Virgin Islands.",
      projectFilters: [],
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
      id: 13,
      project_name: "Image Detective",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/20/",
      project_url_external:
        "http://eol.jsc.nasa.gov/BeyondThephotography/ImageDetective/",
      project_description:
        "Use your geography skills to geolocate Astronaut photography of Earth!  If you have always wanted to associate those amazing photographs of our beautiful planet taken from space with their locations on the Earth, Image Detective is the perfect tool for you!  By doing so, you will help to locate hundreds of thousands of images and also enhance your geography skills at the same time. You can gauge how high your skill level is by accumulating points as you submit each image, then checking out the Who Has High Score? icon on the front page.",
      projectFilters: [],
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
      id: 7,
      project_name:
        "The Advanced Rapid Imaging and Analysis Project (ARIA) Damage Validation Project",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/13/",
      project_url_external: "http://aria.jpl.nasa.gov/",
      project_description:
        "The Advanced Rapid Imaging and Analysis Project at NASA&#39;s Jet Propulsion Laboratory and the California Institute of Technology develops algorithms and a system to automatically respond to natural disaster events and rapidly produce decision support information, using Synthetic Aperture Radar (SAR), Global Positioning System (GPS), and seismic data.  The ARIA Damage Validation Project combines change detection maps derived from SAR data and optical data using human brains through a mobile-friendly web interface. The crowdsourcing produces improved versions of damage detection maps decreasing the number of false positives.",
      projectFilters: [],
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
      id: 8,
      project_name: "Did You Feel It?",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/14/",
      project_url_external: "http://earthquake.usgs.gov/dyfi",
      project_description:
        "The Did You Feel It? (DYFI) project is designed to gather information available about earthquakes from the people who experience them. By tapping the immense number of users online, DYFI can get a detailed characterization of what people were experiencing, the impacts of the earthquake, and the amount of damage it incurred, beyond the scope traditional information gathering techniques. Data input from users is immediately available on the website, and its interactive platform encourages users to gain a deeper understanding of earth sciences while they participate.",
      projectFilters: [],
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
      id: 9,
      project_name: "The Delaware Bay Horseshoe Crab Survey",
      project_url_on_catalog: "https://www.citizenscience.gov/catalog/16/",
      project_url_external: "http://horseshoecrabsurvey.com",
      project_description:
        "The Delaware Bay Horseshoe Crab Survey was founded in 1990, and received government support beginning in 1999. Volunteers collect data on Horseshoe crabs through beach surveys, providing critical information for scientists and policymakers about Horseshoe crab populations in the Delaware Bay. Data from the survey has helped the Atlantic States Marine Fisheries Commission (ASMFC) set protocols for commercial fishing. Limuli Labs, a company that relies on horseshoe crabs to support medical research and practice, provides funding for the project website.",
      projectFilters: [],
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

  // useEffect(() => {
  //   fetch(`http://localhost:8080/projects/all/${page}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.length < QUANTITY) {
  //         setHasMore(false);
  //       }
  //       setProjects(data);
  //     });
  // }, []);
  return (
    <div className=" z-10 min-h-screen bg-gray-700 flex justify-center items-center py-20">
      <InfiniteScroll
        className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0"
        dataLength={projects.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        // loader={<Loading />}
        endMessage={<p>No more data to load.</p>}
      >
        {projects.map((project, index) =>
          project.project_name.includes(filterString) ? (
            <ProductCard key={index} project={project} />
          ) : (
            <></>
          )
        )}
      </InfiniteScroll>
    </div>
  );
}
