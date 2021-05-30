import {
  faCamera,
  faEllipsisH,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import profileImage from "../../../../Images/profile-image.jpg";
import "./PublishFeed.css";

const PublishFeed = () => {
  return (
    <section className="p-10 bg-white br-5">
      <div>
        <h1 className="condensed text-cornBlue">Publish Your Feed</h1>
        <div className="d-flex align-center justify-evenly">
          <img className="roundImage" src={profileImage} />
          <textarea
            placeholder="Write Your Feed..."
            className="textArea condensed br-none p-10 f-20"
          ></textarea>
        </div>
      </div>
      <div className="d-flex justify-between mt-10 tbr-gray p-10">
        <div className="w-40 justify-evenly d-flex">
          <div className="d-flex align-center p-10 shadow-5 h-25 pointer">
            <FontAwesomeIcon className="text-cornBlue" icon={faCamera} />
            <p className="ml-5">Media</p>
          </div>
          <div className="d-flex align-center shadow-5 h-25 p-10 pointer">
            <FontAwesomeIcon className="text-yellow" icon={faSmileBeam} />
            <p className="ml-5">Activity</p>
          </div>
          <div className="d-flex align-center">
            <FontAwesomeIcon
              className="shadow-5 h-25 p-10 br-10 pointer text-gray"
              icon={faEllipsisH}
            />
          </div>
        </div>
        <div className="w-40 d-flex justify-center">
          <button className="w-50 bg-white br-none condensed text-green f-20 pointer br-5 publishBtn">
            Publish
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublishFeed;
