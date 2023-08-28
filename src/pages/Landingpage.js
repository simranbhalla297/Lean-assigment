import React from "react";
import Layout from "../components/Layout/Layout";
import Headrer from "../components/section/Headrer";
import Expertise from "../components/Expertise";
import Clients from "../components/section/Clients";
import Doubt from "../components/section/Doubt";
function Landingpage() {
  return (
    <>
      <Layout>
        <Headrer />
        <Expertise />
        <Clients />
        <Doubt />
      </Layout>
    </>
  );
}

export default Landingpage;
