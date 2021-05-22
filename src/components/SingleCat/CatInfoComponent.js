import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const CatInfoComponent = ({
   simple,
   name,
   graph,
   catId,
   catName,
}) => {
   let white = 5;
   let graphNums = white - graph;
   const obj = [];
   const graphObj = [];
   for (let i = 0; i < graph; i++) {
      obj.push(1);
   }
   for (let i = 0; i < graphNums; i++) {
      graphObj.push(1);
   }

   return (
      <div className="singleCat__info--single ">
         <div className="margin">
            {simple && (
               <h2 className="simple">
                  {name}: <span>{simple} </span>
               </h2>
            )}

            <div className="simple__container">
               {graph && name && <h2 className="simple">{name}:</h2>}
               {graph &&
                  obj.map((numero) => {
                     return (
                        <div className="graphs">
                           <span className="graph"> </span>
                        </div>
                     );
                  })}
               {graphObj.map((numero) => {
                  return (
                     <div class="graphs">
                        <span className="graph-white"></span>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default CatInfoComponent;