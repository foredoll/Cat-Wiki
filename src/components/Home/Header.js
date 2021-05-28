import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Svg from "../../images/CatwikiLogo.svg";
const Header = ({ cats }) => {
   const [catsState, setCatsState] = useState(cats.data);
   const [inputValue, setInputValue] = useState("");
   const inputRef = useRef("");
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   console.log(catsState);

   const fetchCatsByInput = (e) => {
      let catsFiltered = catsState.filter((cat) => {
         return cat.name.toLowerCase() in e.target.value;
      });
      console.log(catsFiltered);
   };
   useEffect(() => {
      window.addEventListener("click", (e) => {
         if (
            inputRef.current &&
            inputRef.current.contains(e.target)
         ) {
         } else {
            setIsMenuOpen(false);
         }
      });
   }, []);
   return (
      <div>
         <div className="header__banner">
            <div className="contents">
               <img src={Svg} alt="" />

               <p>
                  Get to know more about your <br />
                  cat breed
               </p>
               <div ref={inputRef} className="input">
                  <input
                     onChange={(e) => {
                        setInputValue(e.target.value);
                     }}
                     onClick={() => setIsMenuOpen(true)}
                     placeholder="Enter your breed"
                     type="text"
                  />
                  {cats && isMenuOpen && (
                     <div className="header__SearchBox--container">
                        {cats.data
                           .filter((cat) => {
                              if (!inputValue) {
                                 return cat;
                              } else if (
                                 cat.name
                                    .toLowerCase()
                                    .includes(
                                       inputValue.toLowerCase()
                                    )
                              ) {
                                 return cat;
                              }
                           })
                           .map((cat) => {
                              console.log(cat);
                              return (
                                 <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/cats/${cat.name}/${cat.id}`}
                                 >
                                    <p>{cat.name}</p>
                                 </Link>
                              );
                           })}
                     </div>
                  )}
                  <BsSearch
                     size="20"
                     color="black"
                     className="icon"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
