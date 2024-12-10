import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Usecases from "../../components/OurUsecases/Usecases";
import Features from "../../components/Features/Features";

const Home = () => {
  return (
    <>
      <div className="homabanner_div">
        <HomeBanner />
      </div>

      {/* use cases */}
      <div className="container">
        <Usecases />
      </div>

      {/* Fearures section  */}
      <div className="container">
        <Features />
      </div>
    </>
  );
};

export default Home;
