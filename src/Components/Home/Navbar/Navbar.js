import {
  faBell,
  faEnvelope,
  faHome,
  faSearch,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.css";
import profileImage from "../../../Images/profile-image.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex align-center sticky nav bg-white">
      <h3 className="ml-10 text-cornBlue roboto">RegMeet</h3>
      <div className="ml-10 d-flex w-15 justify-evenly">
        <Link to="/">
          <FontAwesomeIcon
            className="shadow-5 navOptions bg-cornBlue text-white p-5 br-5"
            icon={faHome}
            title="Home"
          />
        </Link>
        <Link to="/friends">
          <FontAwesomeIcon
            className="shadow-5 navOptions bg-cornBlue text-white p-5 br-5"
            icon={faUsers}
            title="Friends"
          />
        </Link>
        <Link to="/notifications">
          <FontAwesomeIcon
            className="shadow-5 navOptions bg-cornBlue text-white p-5 br-5"
            icon={faBell}
            title="Notifications"
          />
        </Link>
        <Link to="/messages">
          <FontAwesomeIcon
            className="shadow-5 navOptions bg-cornBlue text-white p-5 br-5"
            icon={faEnvelope}
            title="Messages"
          />
        </Link>
      </div>
      <div className="w-30 ml-10 d-flex justify-center align-center">
        <input
          type="search"
          className="br-5 search w-70"
          placeholder="Search..."
        />
        <FontAwesomeIcon
          className="pointer p-10 ml-5 bg-cornBlue text-white"
          icon={faSearch}
        />
      </div>
      <img
        className="roundImage pointer"
        src={profileImage}
        alt="protyasha roy"
      />
    </nav>
  );
};

export default Navbar;
