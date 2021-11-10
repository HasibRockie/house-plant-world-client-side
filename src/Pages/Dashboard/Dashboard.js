import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Orders from "../Orders/Orders";
import Pay from "./../Pay/Pay";
import Review from "./../Review/Review";

const Dashboard = () => {
  return (
    <div className="m-5 mt-5">
      <Tabs
        defaultActiveKey="orders"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="orders" title="Orders">
          <Orders></Orders>
        </Tab>
        <Tab eventKey="pay" title="Pay">
          <Pay />
        </Tab>
        <Tab eventKey="review" title="Review">
          <Review />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
