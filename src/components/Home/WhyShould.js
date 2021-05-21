import { BsArrowRight } from "react-icons/bs";

const WhyShould = () => {
   return (
      <div>
         <div className="why__container">
            <div className="why__left">
               <h2>
                  Why should you
                  <br /> have a cat?
               </h2>
               <p>
                  Having a cat around you can actually trigger the
                  release of calming chemicals in your body which
                  lower your stress and anxiety leves
               </p>
               <p>
                  READ MORE{" "}
                  {<BsArrowRight style={{ paddingLeft: "10px" }} />}{" "}
               </p>
            </div>
            <div className="why__right">
               <div>
                  <img src="image 2.png" alt="" />
                  <img src="image 1.png" alt="" />
               </div>
               <img src="image 3.png" alt="" />
            </div>
         </div>
      </div>
   );
};

export default WhyShould;
