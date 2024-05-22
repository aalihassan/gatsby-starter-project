import { useStaticQuery, graphql } from "gatsby";
import React from "react";

const About = () => {
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
  const paraGraph =
    elementorSection[2].elements[0].elements[1].elements[0].elements[0].settings
      .editor;
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
    <div className="bg-[#0A192F] pb-20">
      <div className="mx-auto max-w-[1140px]">
        <h6 className="text-center font-sans text-[178px] font-normal uppercase text-[#CCD6F68A]">
          {elementorSection[2].elements[0].elements[0].settings.title}
        </h6>
        <p
          className="mt-7 leading-8 text-[#ccd6f6]"
          dangerouslySetInnerHTML={{ __html: newParaGraph }}
        ></p>
        <div className="mt-8 flex flex-row">
          <div className="w-1/4 leading-7">
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[0]
                  .elements[0].settings.icon_list[0].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[0]
                  .elements[0].settings.icon_list[1].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[0]
                  .elements[0].settings.icon_list[2].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[0]
                  .elements[0].settings.icon_list[3].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[0]
                  .elements[0].settings.icon_list[4].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[0]
                  .elements[0].settings.icon_list[5].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[0]
                  .elements[0].settings.icon_list[6].text
              }
            </p>
          </div>
          <div className="w-1/4 leading-7">
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[1]
                  .elements[0].settings.icon_list[0].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[1]
                  .elements[0].settings.icon_list[1].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[1]
                  .elements[0].settings.icon_list[2].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[1]
                  .elements[0].settings.icon_list[3].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[1]
                  .elements[0].settings.icon_list[4].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[1]
                  .elements[0].settings.icon_list[5].text
              }
            </p>
            <p className="text-[14px] text-[#ccd6f6]">
              <span className="pr-4 text-[#64ffda]">❯</span>
              {
                elementorSection[2].elements[0].elements[2].elements[1]
                  .elements[0].settings.icon_list[6].text
              }
            </p>
          </div>
          <div className="w-1/4"></div>
          <div className="w-1/4"></div>
        </div>

        <button className="mt-6 border-[2px] border-[#64ffda] bg-transparent px-12 py-4 text-[18px] font-medium uppercase text-[#64ffda]">
          {
            elementorSection[2].elements[0].elements[3].elements[0].elements[0]
              .settings.text
          }
        </button>
      </div>
    </div>
  );
};

export default About;
