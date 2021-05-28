const CatInfoComponent = ({ simple, name, graph }) => {
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
               <div className="graphs">
                  {graph &&
                     obj.map((numero) => {
                        return <span className="graph"> </span>;
                     })}
                  {graphObj.map((numero) => {
                     return <span className="graph-white"></span>;
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default CatInfoComponent;
