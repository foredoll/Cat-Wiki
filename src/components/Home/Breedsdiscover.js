import { BsArrowRight } from "react-icons/bs";
import Breed from "./Breed";
import { Link } from "react-router-dom";

// Make a request for a user with a given ID

const Breedsdiscover = ({ cats }) => {
   return (
      <div className="discover__container">
         <div className="items">
            <h3>Most Searched Breeds</h3>
            <div className="breeds">
               <h2>
                  66+ Breeds For you
                  <br /> to discover
               </h2>
               <Link to="/top10" className="breedsLink">
                  SEE MORE{" "}
                  {
                     <BsArrowRight
                        className="arrow"
                        size={35}
                        style={{ paddingLeft: "10px" }}
                     />
                  }{" "}
               </Link>
            </div>
            <div className="breedsCats">
               <Breed data="0" cats={cats}></Breed>
               <Breed data="1" cats={cats}></Breed>
               <Breed data="2" cats={cats}></Breed>
               <Breed data="3" cats={cats}></Breed>
            </div>
         </div>
      </div>
   );
};

export default Breedsdiscover;
