import React from "react";
import Footer from "../Global/Footer";
import Header from "../Global/Header";
import About from "./About";
import Banner from "./Banner";
import Collection from "./Collection";
import FAQ from "./FAQ";
import Process from "./Process";
import Slide from "./Slide";
import Trending from "./Trending";
function Landing() {
  return (
    <>
      <Header />
      <Banner />

      <Trending />
      <Slide />
      <About />
      <Collection />

      <Process />

      <FAQ />

      <Footer />
    </>
  );
}

export default Landing;
