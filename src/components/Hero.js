import { useStaticQuery, graphql } from "gatsby";
import React from "react";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpPage {
        nodes {
          title
          uri
          elementorData
        }
      }
    }
  `);
  const elementorSection = JSON.parse(data.allWpPage.nodes[3].elementorData);
  const paraGraph = elementorSection[1].elements[0].elements[3].settings.editor;
  const removeTags = (str) => {
    // Replace <p> tags
    str = str.replace(/<p[^>]*>/g, "");

    // Replace </p> tags
    str = str.replace(/<\/p>/g, "");

    // Replace <a> tags
    str = str.replace(/<a[^>]*>/g, "");

    // Replace </a> tags
    str = str.replace(/<\/a>/g, "");

    return str;
  };

  const newParaGraph = paraGraph ? removeTags(paraGraph) : "null";

  return (
    <div className="bg-[#0A192F] py-20">
      <div className="mx-auto max-w-[1140px]">
        <h6 className="text-[16px] font-normal text-[#64ffda]">
          {elementorSection[1].elements[0].elements[0].settings.title}
        </h6>
        <h3 className="font-sans text-[80px] font-semibold text-[#ccd6f6]">
          {elementorSection[1].elements[0].elements[1].settings.title}
        </h3>
        <h3 className="font-sans text-[80px] font-semibold text-[#8892b0]">
          {elementorSection[1].elements[0].elements[2].settings.title}
        </h3>
        <p
          className="mt-7 w-1/2 text-[#8892b0]"
          dangerouslySetInnerHTML={{ __html: newParaGraph }}
        ></p>
        <button className="mt-4 border-[2px] border-[#64ffda] bg-transparent px-8 py-4 text-[18px] font-medium uppercase text-[#64ffda]">
          {elementorSection[1].elements[0].elements[4].settings.text}
        </button>
        {/* <p>
        {elementorSection.map((items) => (
          // console.log("Hero Page Items: ", items)
          <div
            dangerouslySetInnerHTML={{
              __html: items.elements[0].elements[0].settings.title,
            }}
          />
        ))}
      </p> */}
      </div>
    </div>
  );
};

export default Hero;
