import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";
import Breed from "./Breed";

// Make a request for a user with a given ID

const Breedsdiscover = () => {
   const [cats, setCats] = useState("");
   const fetchCats = async () => {
      try {
         const response = await axios
            .get("https://api.thecatapi.com/v1/breeds", {
               headers: {
                  "x-api-key": "2635e2e2-9140-447d-85d6-430108ca84bf",
                  limit: "4",
               },
            })
            .then((cat) => {
               setCats(cat);
            });
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchCats();
   }, []);
   return (
      <div className="discover__container">
         <div className="items">
            <h3>Most Searched Breeds</h3>
            <div className="breeds">
               <h2>
                  66+ Breeds For you
                  <br /> to discover
               </h2>
               <p>
                  SEE MORE{" "}
                  {
                     <BsArrowRight
                        className="arrow"
                        size={35}
                        style={{ paddingLeft: "10px" }}
                     />
                  }{" "}
               </p>
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
