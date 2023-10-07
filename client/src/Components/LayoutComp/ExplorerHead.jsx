import React from "react";

export default function ExploreHead() {
  return (
    <div className="relative bg-tc1">
      {/* <img className="z-0 fixed inset-0 w-full h-full object-cover blur-sm" src="public/images/pexels-lumn-604969.jpg"/> */}
      <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
        <div className="flex items-center flex-wrap px-2 md:px-0">
          <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
            <h1 className="font-bold text-4xl text-tc2 md:text-5xl lg:w-10/12">
              Find the projects of the future
            </h1>
            <form action={"true"} className="w-full mt-12">
              <div className="relative flex p-1 rounded-full  bg-gray-900 shadow-md md:p-2">
                <input
                  placeholder="Search for a restaurant"
                  className="w-full p-4 rounded-full bg-gray-900 borber border-0 focus:border-none focus:ring-0 placeholder-gray-200 text-gray-200"
                  type="text"
                />
                <button
                  type="button"
                  title="Start buying"
                  className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-tc2 md:px-12"
                >
                  <span className="hidden text-black font-semibold md:block">
                    Search
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 mx-auto text-yellow-900 md:hidden"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
