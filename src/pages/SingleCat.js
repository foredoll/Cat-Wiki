import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const SingleCat = () => {
   const [cats, setCats] = useState("");
   const [catImage, setCatImage] = useState("");

   const fetchCatImage = async () => {
      try {
         const response = await axios
            .get(
               `https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`
            )
            .then((catImage) => {
               setCatImage(catImage.data[0]);
            });
      } catch (error) {
         console.log(error);
      }
   };

   const fetchCats = async () => {
      try {
         const response = await axios
            .get(
               `https://api.thecatapi.com/v1/breeds/search?q=${catId}`,
               {
                  headers: {
                     "x-api-key":
                        "2635e2e2-9140-447d-85d6-430108ca84bf",
                  },
               }
            )
            .then((cat) => {
               setCats(cat.data[0]);
               console.log(cats);
            });
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchCatImage();
      fetchCats();
   }, []);
   let catId = useParams("catId").catId;
   console.log(catId.catId);
   return (
      <div>
         <img
            src="/CatwikiLogo.svg"
            className="header__logo"
            alt=""
         />
         <div className="singleCat__container">
            {catImage && <img src={catImage.url} alt="" />}
         </div>
      </div>
   );
};

export default SingleCat;
