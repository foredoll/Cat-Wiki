import { useEffect } from "react";
import "./Top10.scss";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";
import Breed from "../components/Home/Breed.js";

// Make a request for a user with a given ID

const Top10 = () => {
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
      <div className="top__container">
         <div className="items">
            <h1>Top 10 most searched breeds</h1>
            <div className="breeds"></div>
            <div className="topBreedCats">
               <Breed data="0" top="true" cats={cats}></Breed>
               <Breed data="1" top="true" cats={cats}></Breed>
               <Breed data="2" top="true" cats={cats}></Breed>
               <Breed data="4" top="true" cats={cats}></Breed>
               <Breed data="5" top="true" cats={cats}></Breed>
               <Breed data="6" top="true" cats={cats}></Breed>
               <Breed data="7" top="true" cats={cats}></Breed>
               <Breed data="8" top="true" cats={cats}></Breed>
               <Breed data="9" top="true" cats={cats}></Breed>
               <Breed data="10" top="true" cats={cats}></Breed>
            </div>
         </div>
      </div>
   );
};

export default Top10;
