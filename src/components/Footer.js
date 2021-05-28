import Svg from "../images/CatwikiLogo.svg";

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__container">
            <img src={Svg} alt="" />
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
