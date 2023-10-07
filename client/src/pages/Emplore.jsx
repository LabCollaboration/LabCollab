import React from "react";
import ExploreHead from "../Components/LayoutComp/ExplorerHead";
import ProjectsList from "../Components/LayoutComp/ProjectsList";
export default function ExplorePage() {
  return (
      <div className="relative w-full">
        <ExploreHead />

        <ProjectsList/>
      </div>

  );
}
