import React from "react";
import Layout from "../layout";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    console.log("props", props);
  }
  render() {
    return (
      <Layout message="This is from dashboard">
        <h1>Dashboard page</h1>
      </Layout>
    );
  }
}

export default Dashboard;
