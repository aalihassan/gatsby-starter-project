// import { Link, graphql, useStaticQuery } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
// import React from "react";
// import { CallToActionButton } from "../CallToActionButton";

// export const Menu = () => {
//   const data = useStaticQuery(graphql`
//     query MenuQuery {
//       wp {
//         acfOptionsMainMenu {
//           mainMenu {
//             callToActionButton {
//               ctaDestination {
//                 ... on WpPage {
//                   uri
//                 }
//               }
//               ctaLabel
//             }
//             menuItems {
//               root {
//                 itemDestination {
//                   ... on WpPage {
//                     uri
//                   }
//                 }
//                 menuItemLabel
//               }
//               subMenuItems {
//                 destination {
//                   ... on WpPage {
//                     uri
//                   }
//                 }
//                 subMenuItemLabel
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   const { menuItems } = data.wp.acfOptionsMainMenu.mainMenu;
//   return (
//     <div className="sticky top-0 z-20 flex h-16 items-center justify-between bg-gradient-to-tr from-dark-green to-emerald-900 px-4 font-bold text-white">
//       <div>
//         <StaticImage
//           src="../../../static/icon.png"
//           layout="fixed"
//           height={30}
//           alt=""
//         />
//       </div>
//       <div className="flex h-full flex-1 items-center justify-end">
//         {(menuItems || []).map((menuItems, index) => (
//           <div
//             key={index}
//             className="group relative flex h-full cursor-pointer hover:bg-emerald-800"
//           >
//             <Link
//               to={menuItems.root.itemDestination.uri}
//               className="flex h-full items-center px-4 text-white no-underline"
//             >
//               {menuItems.root.menuItemLabel}
//             </Link>

//             {!!menuItems.subMenuItems?.length && (
//               <div className="absolute right-0 top-full bg-emerald-800 text-right">
//                 {menuItems.subMenuItems.map((subMenuItems, index) => (
//                   <Link
//                     to={subMenuItems.destination.uri}
//                     key={index}
//                     className="hidden whitespace-nowrap p-4 text-white no-underline hover:bg-emerald-600 group-hover:block"
//                   >
//                     {subMenuItems.subMenuItemLabel}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="pl-4">
//         <CallToActionButton
//           label={
//             data.wp.acfOptionsMainMenu.mainMenu.callToActionButton.ctaLabel
//           }
//           destination={
//             data.wp.acfOptionsMainMenu.mainMenu.callToActionButton
//               .ctaDestination.uri
//           }
//         />
//       </div>
//     </div>
//   );
// };
