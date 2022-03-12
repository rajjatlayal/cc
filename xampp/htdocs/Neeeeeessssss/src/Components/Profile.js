import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Editprofile from "../Authentication/Editprofile";
import Footer from "./Global/Footer";
import Header from "./Global/Header";
import Watchlist from "./Watchlist";

export function Profile() {
  return (
    <>
      <Header />

      <div className="hero__collections">
        <div className="container">
          <h1 className="section__title gradient__text">Profile</h1>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Editprofile</Tab>
          <Tab>Watchlist</Tab>
          <Tab>Subscription</Tab>
        </TabList>
        <TabPanel>
          <Editprofile />
        </TabPanel>
        <TabPanel>
          <Watchlist />
        </TabPanel>
        <TabPanel>
          <section className="details-sub">
            <div className="conatiner details">
              <h5>Your Subscription Details</h5>
            </div>
          </section>
        </TabPanel>
      </Tabs>
      <Footer />
    </>
  );
}
