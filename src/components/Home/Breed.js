import React from "react";

const Breed = ({ cats, data }) => {
   console.log(cats);
   return (
      <div className="breed__container">
         {cats && (
            <div className="breed__container">
               <img src={cats.data[data].image.url} alt="" />
               <p>{cats.data[data].name}</p>
            </div>
         )}
      </div>
   );
};

export default Breed;
