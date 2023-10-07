import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInAndLoginBtn from "../Components/LayoutComp/SignInAndLoginBtn";
import ModalForm from "../Components/Login/ModalForm";
import ModalMyProjects from "../Components/MyProjects/ModalMyProjects";

export default function Layout() {
  const [user, setUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showMyProjects, setShowMyProjects] = useState(false);

  const avatarImageRef = useRef(null);
  const accountInfoRef = useRef(null);

  let avatarToggle = true;
  const navigate = useNavigate();

  const handleMyRestaurants = () => {
    // setSideMenuSmallScreen(false);
    // console.log(isLoggedIn)
    // if (isLoggedIn) {
      setShowMyProjects(true);
    // } else setModalShow(true);
  };

  const avatarEvent = () => {
    let avatarPositonLeft = avatarImageRef.current.getBoundingClientRect().left;

    if (avatarToggle) {
      accountInfoRef.current.style.left = `${avatarPositonLeft - 60}px`;
      avatarToggle = false;
    } else {
      accountInfoRef.current.style.left = `-1000px`;
      avatarToggle = true;
    }
  };

  const AvatarIcon = () => {
    return (
      <div className="ml-10">
        <img
          ref={avatarImageRef}
          type="button"
          onClick={avatarEvent}
          className="w-10 h-10 rounded-full cursor-pointer"
          src="\images\avatar.webp"
          draggable="false"
        />
        <div
          ref={accountInfoRef}
          className="z-10 bg-gray-900 divide-gray-400 rounded-lg shadow w-44  absolute mt-3"
          style={{ left: "-1000px" }}
        >
          <div className="px-4 py-3 text-sm text-gray-400">
            <div className=" text-lg">
              {user.firstName} {user.lastName}
            </div>
            <div className="font-medium truncate">{user.email}</div>
          </div>

          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              {/* <a href="#" className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> */}
              <Link to={`/yourPath`}>
                <button
                  type="button"
                  className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white rounded-xl"
                >
                  DashBoard
                </button>
              </Link>
            </li>
            <li>
              <Link to={`/yourPath`}>
                <button
                  type="button"
                  className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white rounded-xl"
                >
                  Settings
                </button>
              </Link>
            </li>
            <li>
              <Link to={`/yourPath`}>
                <button
                  type="button"
                  className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white rounded-xl"
                >
                  Earnings
                </button>
              </Link>
            </li>
          </ul>
          <div className="py-1">
            {/* <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-600">Sign out</a> */}
            <Link to={`/`}>
              <button
                // onClick={signOutEvent}
                type="button"
                className="w-full flex justify-start px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-600"
              >
                Sign Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="relative w-full ">
        <nav className="z-10 bg-tc3 w-full  ">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
              <div className="w-full px-6 flex justify-between items-center lg:w-max md:px-0">
                <div
                  onClick={() => navigate("/")}
                  className="flex items-center hover:bg-gray-900 p-2 rounded-xl"
                >
                  <img
                    className="w-40"
                    src="../../images/logo2.png"
                    draggable="false"
                  />
                </div>

                {/* <ThreeLinesMenu handleEvent={threeLinesMenuEvent} /> */}

                <div className="lg:hidden">
                  <i
                    className="fas fa-bars text-tc2 text-2xl relative -mr-2 "
                    // onClick={threeLinesMenuEvent}
                    aria-label="hamburger"
                    id="hamburger"
                  ></i>
                </div>

                {/* {sideMenuSmallScreen == true ? (
                  <ThreeLinesMenuConstainer />
                ) : null} */}
              </div>

              <div
                onClick={() => navigate("/explore")}
                className="flex items-center group hover:bg-gray-900 p-2 rounded-xl hidden lg:flex"
              >
                <i className="fas fa-compass text-tc2 text-lg mr-2 transition-transform transform rotate-0 group-hover:rotate-180 group-hover:text-xl"></i>
                <button className="text-tc2 text-xl font-bold  hover:text-hc1">
                  Explore
                </button>
              </div>

              <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                <div className="text-tc2 lg:pr-4 flex ">
                  <button
                    onClick={handleMyRestaurants}
                    className="block md:px-4 transition hover:text-hc1 mb-0 space-y-6 tracking-wide font-medium text-sm md:space-y-0 hover:bg-gray-900  hover:bg-opacity-70 p-3 rounded-2xl"
                  >
                    My Projects
                  </button>
                </div>
                <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                  {user ? (
                    <AvatarIcon />
                  ) : (
                    <SignInAndLoginBtn setModalShow={setShowModal} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <ModalForm show={showModal} onHide={() => setShowModal(false)} />

      <ModalMyProjects
        show={showMyProjects}
        onHide={() => setShowMyProjects(false)}
      />
    </>
  );
}
