import React from "react";
import Layout from "../components/Layout";
import ChildRenderer from "../components/Elementor/ChildRenderer";

const pageTemplate = (data) => {
  const elementorData = JSON.parse(data.pageContext.elementorData);
  console.log("Elementor Data: ", elementorData);
  return (
    <div>
      <Layout>
        <ChildRenderer elements={elementorData} />
      </Layout>
    </div>
  );
};

export default pageTemplate;
