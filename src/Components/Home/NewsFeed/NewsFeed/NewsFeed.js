import React from "react";
import Feeds from "../Feeds/Feeds";
import PublishFeed from "../PublishFeed/PublishFeed";

const NewsFeed = () => {
  return (
    <section className="w-45 p-10 mr-10 br-5">
      <PublishFeed />
      <Feeds />
    </section>
  );
};

export default NewsFeed;
