import React, { useState } from "react";
import ExploreHead from "../Components/LayoutComp/ExplorerHead";
import ProjectsList from "../Components/LayoutComp/ProjectsList";
export default function ExplorePage() {
  const [filterString, setFilterString] = useState("");
  return (
    <div className="relative w-full">
      <ExploreHead setFilterString={setFilterString} />

      <ProjectsList filterString={filterString} />
    </div>
  );
}
