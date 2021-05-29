import React from "react";
import NewsFeed from "../NewsFeed/NewsFeed/NewsFeed";
import RecommendedPages from "../RecomendedPages/RecommendedPages";
import "./Home.css";

const Home = () => {
  return (
    <section className="p-20 d-flex">
      <RecommendedPages />
      <NewsFeed />
    </section>
  );
};

export default Home;
