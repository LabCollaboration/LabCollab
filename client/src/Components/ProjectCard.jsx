import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="z-10 max-w-sm bg-tc1 px-6 pt-8 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl h-20 hover:text-hc1 font-bold text-tc2">{project.project_name? project.project_name:"project NAME"}</h3>
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full rounded-xl"
          src={
            project.image?.imageUrl
              ? project.image.imageUrl
              : "/images/projimage.avif"
          }
          alt="Colors"
        />
      </div>
      <p className="mt-4 text-gray-200 text-lg font-bold cursor-pointer max-h-60 h-60 overflow-y-scroll overflow-x-hidden custom-scrollbar">
        {project.project_description}
      </p>
      <div className="my-4">
        {/* <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-tc2 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p>Rating : {project.rating}/5</p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-tc2 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <p>
            <a href={project.address} target="_blank">
              Location
            </a>
          </p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-tc2 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </span>
          <p>bla bla</p>
        </div> */}
        <button
          id={project.id}
          onClick={() => navigate(`/explore/project/${project.id}`)}
          className="mt-4 text-xl w-full text-black bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br font-bold py-2 rounded-xl "
        >
          Show more
          {/* shadow-[0_5px_10px_rgba(246,_194,_61,_0.7)] */}
        </button>
      </div>
    </div>
  );
}
