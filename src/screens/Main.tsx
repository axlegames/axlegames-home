import { Box } from "@chakra-ui/react";
import { lazy } from "react";
import { Element } from "react-scroll";
import { brandingColors } from "../config/brandingColors";

const Products = lazy(() => import("./Products"));
const Why = lazy(() => import("./Why"));
const Tokenomics = lazy(() => import("./Tokenomics"));
const RoadMap = lazy(() => import("./RoadMap"));
const Team = lazy(() => import("./Team"));
const PoweredBy = lazy(() => import("./PoweredBy"));
const NFTs = lazy(() => import("./NFTs"));
const Footer = lazy(() => import("./Footer"));
const Home = lazy(() => import("./Home"));

const Main = () => {
  return (
    <Box>
      <Element name="home">
        <Home />
      </Element>
      <Element name="products">
        <Products />
      </Element>
      <Element name="why">
        <Why />
      </Element>
      <NFTs />
      <Element name="token">
        <Tokenomics />
      </Element>
      <Element name="roadmap">
        <RoadMap />
      </Element>
      <Element name="team">
        <Box bg={brandingColors.bgColor}>
          <Team />
          <PoweredBy />
        </Box>
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </Box>
  );
};
export default Main;

// <header id="header-section">
//   <div className="overlay">
//     <div className="container">
//       <div className="row d-flex header-area">
//         <div className="logo-section flex-grow-1 d-flex align-items-center">
//           <a className="site-logo site-title" href="index.html">
//             <img src={Logo} alt="site-logo" />
//           </a>
//         </div>
//         <button
//           className="navbar-toggler ml-auto collapsed"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <i className="fas fa-bars"></i>
//         </button>
//         <nav className="navbar navbar-expand-lg p-0">
//           <div
//             className="navbar-collapse collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav main-menu ml-auto">
//               <li>
//                 <a href="index.html" className="active">
//                   Home
//                 </a>
//               </li>
//               <li className="menu_has_children">
//                 <a href="#0">Tournaments</a>
//                 <ul className="sub-menu">
//                   <li>
//                     <a href="tournaments.html">Tournaments</a>
//                   </li>
//                   <li>
//                     <a href="tournaments-single.html">
//                       Tournaments Single
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="menu_has_children">
//                 <a href="#0">Pages</a>
//                 <ul className="sub-menu">
//                   <li>
//                     <a href="about-us.html">About Us</a>
//                   </li>
//                   <li>
//                     <a href="shop.html">Shop</a>
//                   </li>
//                   <li>
//                     <a href="shop-details.html">Shop Details</a>
//                   </li>
//                   <li>
//                     <a href="profile.html">Profile</a>
//                   </li>
//                   <li>
//                     <a href="cart.html">Cart</a>
//                   </li>
//                   <li>
//                     <a href="check-out.html">Check Out</a>
//                   </li>
//                   <li>
//                     <a href="features.html">Features</a>
//                   </li>
//                   <li>
//                     <a href="error.html">Error</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="contact.html">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <div className="right-area header-action d-flex align-items-center">
//           {/* <div className="search-icon">
//             <a href="#">
//               <img src={SearchButton} alt="icon" />
//             </a>
//           </div> */}
//           {/* <div className="lang d-flex align-items-center">
//             <select>
//               <option value="1">EN</option>
//               <option value="2">BN</option>
//               <option value="3">ES</option>
//               <option value="4">NL</option>
//             </select>
//           </div> */}
//           <a className="cmn-btn">Join Now!</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>
