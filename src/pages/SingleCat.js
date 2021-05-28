import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./SingleCat.scss";
import CatInfoComponent from "../components/SingleCat/CatInfoComponent";
import { API_KEY } from "../API_KEY";
const SingleCat = () => {
   const [cat, setCat] = useState("");
   const [catImage, setCatImage] = useState("");
   const [catImages, setCatImages] = useState("");

   let params = useParams("catId");
   let catName = params.catName;
   let catId = params.catId;
   const [isLoading, setIsLoading] = useState(true);
   const [isLoading1, setIsLoading1] = useState(true);
   const [isLoading2, setIsLoading2] = useState(true);
   const [carregando, setCarregando] = useState(true);
   const fetchCatImage = async () => {
      try {
         const response = await axios
            .get(
               `https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`
            )
            .then((catImage) => {
               setCatImage(catImage.data[0]);
               setIsLoading(false);
            });
      } catch (error) {
         console.log(error);
      }
   };

   const fetchCats = async () => {
      try {
         const response = await axios
            .get(
               `https://api.thecatapi.com/v1/breeds/search?q=${catName}`,
               {
                  headers: {
                     "x-api-key": API_KEY,
                  },
               }
            )
            .then((cat) => {
               setCat(cat.data[0]);
               setIsLoading1(false);
            });
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      console.log("abc");
      if (!isLoading && !isLoading1 && !isLoading2) {
         setCarregando(false);
      }
   }, [isLoading, isLoading1, isLoading2]);
   const fetchCatsImages = async () => {
      try {
         const response = await axios
            .get(
               `https://api.thecatapi.com/v1/images/search?breed_ids=${catId}&include_breeds=true&limit=8`,
               {
                  headers: {
                     "x-api-key": API_KEY,
                  },
               }
            )
            .then((cat) => {
               setCatImages(cat);
               setIsLoading2(false);
            });
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchCatImage();
      fetchCatsImages();
      fetchCats();
   }, []);

   return (
      <div>
         {carregando ? (
            <div className="loadingContainer">
               <img src="/loading.gif" alt="loading" />
            </div>
         ) : (
            <div className="singleCat">
               <div className="singleCat__container">
                  {catImage && <img src={catImage.url} alt="" />}
                  <div className="singleCat__info">
                     <h2 className="name">{cat.name}</h2>
                     <h3 className="description">
                        {cat.description}
                     </h3>
                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Temperament"
                        simple={cat.temperament}
                     />
                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Origin"
                        simple={cat.origin}
                     />
                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Life Span"
                        simple={cat.life_span}
                     />
                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Affection level"
                        graph={cat.adaptability}
                     />
                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Child Friendly"
                        graph={cat.child_friendly}
                     />
                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Grooming"
                        graph={cat.grooming}
                     />
                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Inteligence"
                        graph={cat.intelligence}
                     />

                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Health issues"
                        graph={cat.health_issues}
                     />
                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Social needs"
                        graph={cat.social_needs}
                     />
                     <CatInfoComponent
                        catId={catId}
                        catName={catName}
                        name="Stranger friendly"
                        graph={cat.stranger_friendly}
                     />
                  </div>
               </div>
               <h2>Others photos</h2>
               <div className="imageContainer">
                  {catImages &&
                     catImages.data.map((cat) => {
                        console.log(cat, "cat");
                        return <img src={cat.url} alt="" />;
                     })}
               </div>
               ;
            </div>
         )}
      </div>
   );
};

export default SingleCat;
