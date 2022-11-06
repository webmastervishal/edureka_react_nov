import React from "react";
import Container from "../currency/Container";
import Layout from "../layout";

class Dashboard extends React.Component {
  render() {
    return (
      <Layout message="This is from dashboard">
        <Container />
      </Layout>
    );
  }
}

export default Dashboard;
