import React from "react";
// import RestauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../ProjectCard";
import Loading from "../Loading";
// import Loading from "../Loading";

const QUANTITY = 6;

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
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
  //   fetch(`https://www.citizenscience.gov/feed.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setProjects(data["_project"]);
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
        {projects.map((project, index) => (
          <ProductCard key={index} project={project} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
