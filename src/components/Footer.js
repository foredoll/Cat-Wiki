import { Link } from "react-router-dom";
import Svg from "../images/CatwikiLogo.svg";

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__container">
            <Link to="/">
               <img src={Svg} alt="" />
            </Link>
            <p>
               © created by Gilamastra{" "}
               <span className="footer__span"></span> -
               devChallenge.io 2021
            </p>
         </div>
      </div>
   );
};

export default Footer;
