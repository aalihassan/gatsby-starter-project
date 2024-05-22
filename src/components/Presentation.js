import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";

const Presentation = () => {
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
  console.log("Presentation Page elementorSection: ", elementorSection);
  console.log(
    "Presentation Page: ",
    elementorSection[1].elements[0].elements[1].settings.title
  );
  const paraGraph =
    elementorSection[3].elements[0].elements[1].elements[0].elements[1].settings
      .editor;
  const paraGraph1 =
    elementorSection[3].elements[0].elements[1].elements[0].elements[2].settings
      .editor;
  const paraGraph2 =
    elementorSection[3].elements[0].elements[1].elements[0].elements[5].settings
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
  const newParaGraph1 = paraGraph1 ? removeTags(paraGraph1) : "null";
  const newParaGraph2 = paraGraph2 ? removeTags(paraGraph2) : "null";

  return (
    <div className="bg-[#0A192F] pb-20">
      <div className="mx-auto max-w-[1140px]">
        <h6 className="text-center font-sans text-[178px] font-normal uppercase text-[#CCD6F68A]">
          {elementorSection[3].elements[0].elements[2].settings.title}
        </h6>
        <h6 className="text-center font-sans text-[60px] font-bold uppercase text-[#ccd6f6]">
          {elementorSection[3].elements[0].elements[0].settings.title}
        </h6>
        <div className="mt-8 flex flex-row gap-24">
          <div className="w-1/2">
            <h6 className="font-sans text-[18px] font-bold text-[#ccd6f6]">
              {
                elementorSection[3].elements[0].elements[1].elements[0]
                  .elements[0].settings.title
              }
            </h6>
            <Link
              to="https://multisitedev.com/"
              className="mt-7 leading-8 text-[#64ffda] no-underline"
              dangerouslySetInnerHTML={{ __html: newParaGraph }}
            ></Link>
            <p
              className="text-justify font-sans font-normal text-[#8892b0]"
              dangerouslySetInnerHTML={{ __html: newParaGraph1 }}
            ></p>
          </div>
          <div className="w-1/2">
            <h6 className="font-sans text-[18px] font-bold text-[#ccd6f6]">
              {
                elementorSection[3].elements[0].elements[1].elements[0]
                  .elements[3].settings.title
              }
            </h6>
            <Link
              to="https://multisitedev.com/"
              className="mt-7 leading-8 text-[#64ffda] no-underline"
              dangerouslySetInnerHTML={{ __html: newParaGraph }}
            ></Link>
            <p
              className="text-justify font-sans font-normal text-[#8892b0]"
              dangerouslySetInnerHTML={{ __html: newParaGraph2 }}
            ></p>
          </div>
        </div>
        <div className="mt-8 flex flex-row gap-24">
          <div className="w-1/2">
            <h6 className="font-sans text-[18px] font-bold text-[#ccd6f6]">
              {
                elementorSection[3].elements[0].elements[1].elements[1]
                  .elements[0].settings.title
              }
            </h6>
            <Link
              to="https://multisitedev.com/"
              className="mt-7 leading-8 text-[#64ffda] no-underline"
              dangerouslySetInnerHTML={{ __html: newParaGraph }}
            ></Link>
            <p
              className="text-justify font-sans font-normal text-[#8892b0]"
              dangerouslySetInnerHTML={{ __html: newParaGraph1 }}
            ></p>
          </div>
          <div className="w-1/2">
            <h6 className="font-sans text-[18px] font-bold text-[#ccd6f6]">
              {
                elementorSection[3].elements[0].elements[1].elements[0]
                  .elements[3].settings.title
              }
            </h6>
            <Link
              to="https://multisitedev.com/"
              className="mt-7 leading-8 text-[#64ffda] no-underline"
              dangerouslySetInnerHTML={{ __html: newParaGraph }}
            ></Link>
            <p
              className="text-justify font-sans font-normal text-[#8892b0]"
              dangerouslySetInnerHTML={{ __html: newParaGraph2 }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
