import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Breed = ({ cats, data, top }) => {
   let history = useHistory();

   const goToSingleCat = () => {
      history.push(
         `/cats/${cats.data[data].name}/${cats.data[data].id}`
      );
   };
   function truncateString(str, num) {
      if (str.length <= num) {
         return str;
      }
      if (window.innerWidth < 768) {
         return str.slice(0, num) + "...";
      }
      return str;
   }

   useEffect(() => {});
   return (
      <div>
         {cats && !top && (
            <div className="breed__container">
               <img
                  onClick={goToSingleCat}
                  src={cats.data[data].image.url}
                  alt=""
               />
               <p>{cats.data[data].name}</p>
            </div>
         )}
         {top && cats && (
            <div className="TopBreed__container">
               <img
                  onClick={goToSingleCat}
                  src={cats.data[data].image.url}
                  alt=""
               />
               <div>
                  <h3 onClick={goToSingleCat}>
                     {data}. {cats.data[data].name}
                  </h3>
                  <h2 className="truncate" onClick={goToSingleCat}>
                     {truncateString(
                        cats.data[data].description,
                        150
                     )}
                  </h2>
               </div>
            </div>
         )}
      </div>
   );
};

export default Breed;
