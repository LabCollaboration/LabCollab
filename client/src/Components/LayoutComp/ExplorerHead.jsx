import React, { useRef, useState } from "react";

export default function ExploreHead({ setFilterString }) {
  const [tags, setTags] = useState([
    "chimie",
    "fizica",
    "motiune",
    "spatiu",
    "rachete",
    "resurse minerale",
    "hidrogen",
    "oxigen",
    "weather",
    "tornado",
    "snow",
    "ice",
    "storm",
    "invazion",
    "electicity",
    "AI",
  ]);
  const searchImputRef = useRef(null);

  const handleSearch = () => {
    console.log(searchImputRef.current.value);
    setFilterString(searchImputRef.current.value);
  };

  return (
    <div className="relative bg-slate-900">
      {/* <img className="z-0 fixed inset-0 w-full h-full object-cover blur-sm" src="public/images/pexels-lumn-604969.jpg"/> */}
      <div className="container px-6 md:px-12 lg:pt-[4.8rem] lg:px-7">
        <div className="flex items-center flex-wrap px-2 md:px-0">
          <div className="relative lg:w-6/12 lg:py-24 xl:py-20">
            <h1 className="font-bold text-4xl  hover:text-hc1 text-tc2 md:text-5xl lg:w-10/12">
              Find the projects of the future
            </h1>
            <form action={"true"} className="w-full mt-12">
              <div className="relative flex p-1 rounded-full  bg-gray-900 shadow-md md:p-2">
                <input
                  ref={searchImputRef}
                  placeholder="Search for a project"
                  className="w-full p-4 rounded-full bg-gray-900 borber border-0 focus:border-none focus:ring-0 placeholder-gray-200 text-gray-200"
                  type="text"
                />
                <button
                  type="button"
                  title="Start buying"
                  className="ml-auto py-3 px-6 hover:from-hc1 rounded-full text-center transition bg-gradient-to-b from-tc2 md:px-12"
                  onClick={handleSearch}
                >
                  <span className="hidden text-black font-semibold md:block">
                    Search
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 text-yellow-900 md:hidden"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className=" ">
            <img
              src="/images/nasa2.gif"
              className="relative w-full"
              alt="food illustration"
            />
          </div>
        </div>
        <div className="flex ">
          <div>
            <h3>Filter By:</h3>
          </div>
          <div
            className="px-2 py-2 flex  gap-[0.5rem] flex-wrap max-w-md max-h-2"
            // onClick={() => setTagsModal(true)}
          >
            {tags?.map((tag, index) => (
              <div
                className="tag-item bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:p-2 transition-all"
                key={index}
              >
                <span className="text"># {tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
