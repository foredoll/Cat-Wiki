import { useEffect } from "react";
import "./Top10.scss";
import axios from "axios";
import { useState } from "react";
import Breed from "../components/Home/Breed.js";
import { API_KEY } from "../API_KEY";

// Make a request for a user with a given ID

const Top10 = () => {
   const [cats, setCats] = useState("");
   const [isLoading, setIsLoading] = useState(true);

   const fetchCats = async () => {
      try {
         const response = await axios
            .get("https://api.thecatapi.com/v1/breeds", {
               headers: {
                  "x-api-key": API_KEY,
                  limit: "4",
               },
            })
            .then((cat) => {
               setCats(cat);
               setIsLoading(false);
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
         {isLoading ? (
            <div className="loadingContainer">
               <img src="/loading.gif" alt="loading" />
            </div>
         ) : (
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
         )}
      </div>
   );
};

export default Top10;
