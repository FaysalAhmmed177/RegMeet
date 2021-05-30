import {
  faEllipsisV,
  faEye,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import edward from "../../../../Images/edward.jpeg";
import dan from "../../../../Images/dan.jpg";
import david from "../../../../Images/david.jpg";
import elise from "../../../../Images/elise.jpg";

const stories = [
  {
    userName: "Edward Mayers",
    img: edward,
    storyTime: "Few minutes ago",
  },
  {
    userName: "Dan Walker",
    img: dan,
    storyTime: "59 minutes ago",
  },
  {
    userName: "David Kim",
    img: david,
    storyTime: "2 hours ago",
  },
  {
    userName: "Elise Walker",
    img: elise,
    storyTime: "3 hours ago",
  },
];

const Stories = () => {
  return (
    <section className="sticky">
      <div className="d-flex align-center justify-evenly">
        <h1 className="text-gray condensed">Stories</h1>
        <FontAwesomeIcon
          className="text-gray pointer p-10"
          icon={faEllipsisV}
        />
      </div>
      <div className="p-10 tbr-gray d-flex align-center justify-evenly">
        <FontAwesomeIcon
          className="text-gray f-40 pointer"
          icon={faPlusCircle}
        />
        <div>
          <p className="roboto ptl-10">Add a new Story</p>
          <p className="text-gray f-15 pbl-5">
            Share an image, a video or some text
          </p>
        </div>
      </div>
      {stories.map((story) => (
        <div
          className="tbr-gray p-5 d-flex align-center justify-between"
          key={story.userName}
        >
          <div className="d-flex align-center">
            <img src={story.img} className="roundImage" />
            <div className="d-flex flex-col ml-20">
              <p className="condensed fw-7 ptl-10">{story.userName}</p>
              <p className="text-boldGray pbl-20 f-15">{story.storyTime}</p>
            </div>
          </div>
          <FontAwesomeIcon
            className="pointer text-cornBlue f-20"
            icon={faEye}
          />
        </div>
      ))}
      <p className="bg-lightBlue p-10 text-center pointer">View All</p>
    </section>
  );
};

export default Stories;
