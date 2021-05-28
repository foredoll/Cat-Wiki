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
                  <Breed
                     num="1"
                     data="64"
                     top="true"
                     cats={cats}
                  ></Breed>
                  <Breed
                     num="2"
                     data="45"
                     top="true"
                     cats={cats}
                  ></Breed>
                  <Breed
                     num="3"
                     data="54"
                     top="true"
                     cats={cats}
                  ></Breed>
                  <Breed
                     num="4"
                     data="23"
                     top="true"
                     cats={cats}
                  ></Breed>
                  <Breed
                     num="5"
                     data="2"
                     top="true"
                     cats={cats}
                  ></Breed>
                  <Breed
                     num="6"
                     data="34"
                     top="true"
                     cats={cats}
                  ></Breed>
                  <Breed
                     num="7"
                     data="4"
                     top="true"
                     cats={cats}
                  ></Breed>
                  <Breed
                     num="8"
                     data="24"
                     top="true"
                     cats={cats}
                  ></Breed>
                  <Breed
                     num="9"
                     data="12"
                     top="true"
                     cats={cats}
                  ></Breed>
                  <Breed
                     num="10"
                     data="1"
                     top="true"
                     cats={cats}
                  ></Breed>
               </div>
            </div>
         )}
      </div>
   );
};

export default Top10;
