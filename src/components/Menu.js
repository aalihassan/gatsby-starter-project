import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu {
        menuItems {
          nodes {
            label
            uri
          }
        }
      }
    }
  `);

  const menuItem = data.wpMenu.menuItems.nodes;

  return (
    <div className="bg-[#0A192F]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between">
        <div className="text-white">
          <h1 className="pt-3 text-center text-[#64ffda]">Ali Hassan</h1>
        </div>
        <div className="flex">
          {menuItem.map((item) => (
            <Link
              key={item.label}
              to={item.uri}
              className="px-4 text-white no-underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
