import {
  faComment,
  faEllipsisV,
  faHeart,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import feedsData from "./FeedsData";

const Feeds = () => {
  console.log(feedsData);
  return (
    <section className="feeds mt-20">
      {feedsData.map((feed) => (
        <div key={feed.userName} className="bg-white p-5 mt-10 br-5">
          <div className="d-flex align-center">
            <img className="roundImage w-10" src={feed.userImg} />
            <div className="ml-20 w-80">
              <p className="fw-7 condensed ptl-5 pointer">{feed.userName}</p>
              <p className="text-gray f-15 pbl-10">{feed.postedDate}</p>
            </div>
            <FontAwesomeIcon
              className="pointer text-gray bg-lightGray p-10 br-100"
              icon={faEllipsisV}
            />
          </div>
          <div>
            <p className="text-boldGray roboto">{feed.postCaption}</p>
            <img className="bg-white w-100 br-5" src={feed.postedImage} />
          </div>
          <div className="d-flex justify-between tbr-gray mt-10">
            <div className="d-flex align-center">
              <img className="roundImage" src={feed.img1} />
              <img className="roundImage" src={feed.img2} />
              <img className="roundImage" src={feed.img3} />
              <p className="text-gray f-10 ml-10">{feed.likeCap}</p>
            </div>
            <div className="align-center d-flex w-30 justify-evenly">
              <FontAwesomeIcon
                className="pointer text-cornBlue f-20 text-shadow"
                icon={faHeart}
              />
              <FontAwesomeIcon className="pointer f-20" icon={faShareAlt} />
              <FontAwesomeIcon className="pointer f-20" icon={faComment} />
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-center align-center mt-10">
        <button className="p-10 f-20 br-none shadow-5 text-cornBlue br-5 pointer">
          Load More
        </button>
      </div>
    </section>
  );
};

export default Feeds;
