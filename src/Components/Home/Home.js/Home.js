import React from "react";
import NewsFeed from "../NewsFeed/NewsFeed/NewsFeed";
import RecommendedPages from "../RecomendedPages/RecommendedPages";
import SideFeed from "../SideFeed/SideFeed/SideFeed";
import "./Home.css";

const Home = () => {
  return (
    <section className="p-20 d-flex">
      <RecommendedPages />
      <NewsFeed />
      <SideFeed />
    </section>
  );
};

export default Home;
