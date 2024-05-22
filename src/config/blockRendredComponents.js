import React from "react";
import {
  BlockRenderer,
  getClasses,
  getStyles,
} from "@webdeveducation/wp-block-tools";
import { CallToActionButton, MediaText, CarSearch } from "../components";
import numeral from "numeral";

export const blockRendrerComponents = (block) => {
  switch (block.name) {
    case "gbtsby/carsearch": {
      return (
        <CarSearch
          key={block.id}
          style={getStyles(block)}
          className={getClasses(block)}
        />
      );
    }
    case "gbtsby/carpice": {
      return (
        <div className="flex justify-center">
          <div className="bg-black px-8 py-5 font-heading text-3xl text-white">
            ${numeral(block.attributes.price).format("0,0")}
          </div>
        </div>
      );
    }
    case "gbtsby/ctabutton": {
      const alignText = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      };
      return (
        <div className={alignText[block.attributes.data.align]}>
          <CallToActionButton
            destination={block.attributes.data.destination}
            label={block.attributes.data.label}
          />
        </div>
      );
    }
    case "core/media-text": {
      return (
        <MediaText
          key={block.id}
          className={getClasses(block)}
          style={getStyles(block)}
          verticleAlignment={block.attributes.verticleAlignment}
          gatsbyImage={block.attributes.gatsbyImage}
          mediaPosition={block.attributes.mediaPosition}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </MediaText>
      );
    }
    default:
      return null;
  }
};
