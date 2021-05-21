import React from "react";
import { useHistory } from "react-router-dom";

const Breed = ({ cats, data }) => {
   let history = useHistory();
   const goToSingleCat = () => {
      history.push(`/cats/${cats.data[data].id}`);
   };
   return (
      <div>
         {cats && (
            <div className="breed__container">
               <img
                  onClick={goToSingleCat}
                  src={cats.data[data].image.url}
                  alt=""
               />
               <p>{cats.data[data].name}</p>
            </div>
         )}
      </div>
   );
};

export default Breed;
