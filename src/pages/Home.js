import axios from "axios";
import { useState, useEffect } from "react";
import Breedsdiscover from "../components/Home/Breedsdiscover";
import Header from "../components/Home/Header";
import WhyShould from "../components/Home/WhyShould";
import "./Home.scss";

const Home = () => {
   const [cats, setCats] = useState("");
   const [isLoading, setIsLoading] = useState(true);
   const fetchCats = async () => {
      try {
         await axios
            .get("https://api.thecatapi.com/v1/breeds", {
               headers: {
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
      document.title = "Wiki Cat - Home";
      fetchCats();
   }, []);
   return (
      <div>
         {isLoading ? (
            <div className="loadingContainer">
               <img alt="loading" src="loading.gif" />
            </div>
         ) : (
            <div>
               <Header cats={cats} />
               <Breedsdiscover cats={cats} />
               <WhyShould />
            </div>
         )}
      </div>
   );
};

export default Home;
