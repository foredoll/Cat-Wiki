import { BsSearch } from "react-icons/bs";
import Svg from "../../images/CatwikiLogo.svg";
const Header = () => {
   return (
      <div>
         <div className="header__banner">
            <div className="contents">
               <img src={Svg} alt="" />

               <p>
                  Get to know more about your <br />
                  cat breed
               </p>
               <div className="input">
                  <input placeholder="Enter your breed" type="text" />
                  <BsSearch
                     size="20"
                     color="black"
                     className="icon"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
