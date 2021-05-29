import React from "react";
import "./RecommendedPages.css";
import fastPizza from "../../../Images/fastpizza.svg";
import droid from "../../../Images/lonelydroid.svg";
import metaMovies from "../../../Images/metamovies.svg";
import nuclearJs from "../../../Images/nuclearjs.svg";
import slicer from "../../../Images/slicer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const recommended = [
  {
    title: "Fast Pizza",
    type: "Pizza & Fast Food",
    icon: fastPizza,
    followers: "150K",
  },
  {
    title: "Lonely Droid",
    type: "Technology",
    icon: droid,
    followers: "75K",
  },
  {
    title: "Meta Movies",
    type: "Arts/Entertainment",
    icon: metaMovies,
    followers: "29K",
  },
  {
    title: "Nuclear Js",
    type: "Technology",
    icon: nuclearJs,
    followers: "56K",
  },
  {
    title: "Slicer",
    type: "Web/Design",
    icon: slicer,
    followers: "300K",
  },
];

const RecommendedPages = () => {
  return (
    <section className="sticky recommendedPage bg-white br-5">
      <div className="d-flex align-center justify-evenly">
        <h1 className="text-gray condensed">Recommended Pages</h1>
        <FontAwesomeIcon
          className="text-gray pointer p-10"
          icon={faEllipsisV}
        />
      </div>
      {recommended.map((item) => (
        <div
          className="d-flex tbr-gray p-5 align-center justify-evenly pages roboto"
          key={item.title}
        >
          <div className="w-10">
            <img
              className="roundImage w-100"
              src={item.icon}
              alt={item.title}
            />
          </div>
          <div className="ml-5 w-40">
            <p>{item.title}</p>
            <p className="text-gray f-15 pbl-10">{item.type}</p>
          </div>
          <div className="w-40 text-center">
            <p>
              <span className="text-cornBlue">{item.followers}</span> Followers
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecommendedPages;
