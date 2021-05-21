import React from "react";

const Breed = ({ cats, data }) => {
   console.log(cats);
   return (
      <div className="breed__container">
         {cats && <img src={cats.data[data].image.url} alt="" />}
         <p>{cats.data[data].name}</p>
      </div>
   );
};

export default Breed;
